module.exports = {
  name: "joke",
  description: "Real command 14",
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: `Why did the computer get cold? Because it left its Windows open.` });
  }
};