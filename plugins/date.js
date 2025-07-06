module.exports = {
  name: "date",
  description: "Get current date",
  run: async (sock, msg, args) => {
    const date = new Date().toDateString();
    await sock.sendMessage(msg.key.remoteJid, { text: `📅 Today's date: ${date}` });
  }
};