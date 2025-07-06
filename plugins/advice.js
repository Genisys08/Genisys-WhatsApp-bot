module.exports = {
  name: "advice",
  description: "Real command 18",
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: `Never trust an atom, they make up everything.` });
  }
};