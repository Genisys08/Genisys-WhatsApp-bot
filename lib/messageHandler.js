const fs = require('fs');
const path = require('path');

const plugins = [];
fs.readdirSync(path.join(__dirname, '../plugins')).forEach(file => {
  if (file.endsWith('.js')) {
    const plugin = require(`../plugins/${file}`);
    plugins.push(plugin);
  }
});

async function handleMessage(sock, msg) {
  try {
    const body = msg.message?.conversation || msg.message?.extendedTextMessage?.text;
    if (!body || !body.startsWith('.')) return;

    const from = msg.key.remoteJid;
    const isGroup = from.endsWith("@g.us");
    const sender = isGroup ? msg.key.participant : msg.key.remoteJid;
    const args = body.slice(1).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const plugin = plugins.find(p => p.name === command);

    if (!plugin) return;

    let isAdmin = false;
    let isOwner = sender === process.env.OWNER_NUMBER + "@s.whatsapp.net";

    if (isGroup) {
      const metadata = await sock.groupMetadata(from);
      isAdmin = metadata.participants.find(p => p.id === sender && (p.admin === "admin" || p.admin === "superadmin"));
    }

    if (plugin.adminOnly && !isAdmin && !isOwner) {
      return sock.sendMessage(from, { text: "⛔ This command is for *admins only*." });
    }
    if (plugin.groupOnly && !isGroup) {
      return sock.sendMessage(from, { text: "⛔ This command can only be used in *groups*." });
    }
    if (plugin.ownerOnly && !isOwner) {
      return sock.sendMessage(from, { text: "⛔ This command is for *the bot owner only*." });
    }

    await plugin.run(sock, msg, args, { isGroup, isAdmin, isOwner });
  } catch (e) {
    console.error("Handler error:", e);
  }
}

module.exports = { handleMessage };
    
