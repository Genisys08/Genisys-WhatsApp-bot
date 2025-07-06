module.exports = {
  name: "groupinfo",
  description: "Shows group information",
  run: async (sock, msg, args) => {
    const metadata = await sock.groupMetadata(msg.key.remoteJid);
    const info = `📛 Name: ${metadata.subject}\n👥 Members: ${metadata.participants.length}\n🆔 ID: ${metadata.id}`;
    await sock.sendMessage(msg.key.remoteJid, { text: info });
  }
};