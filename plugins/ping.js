module.exports = {
  name: "ping",
  description: "Real command 8",
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: `Pong! 🏓` });
  }
};