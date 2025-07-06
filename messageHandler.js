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
    if (!body || !body.startsWith('!')) return;

    const args = body.slice(1).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    const plugin = plugins.find(p => p.name === command);
    if (plugin) await plugin.run(sock, msg, args);
  } catch (e) {
    console.error("Handler error:", e);
  }
}

module.exports = { handleMessage };