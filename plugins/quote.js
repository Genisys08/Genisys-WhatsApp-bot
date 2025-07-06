module.exports = {
  name: "quote",
  description: "Real command 13",
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: `“The best way to get started is to quit talking and begin doing.”` });
  }
};