module.exports = {
  name: "define",
  description: "Fake definition",
  run: async (sock, msg, args) => {
    const word = args[0] || "life";
    const def = `Definition of ${word}: A placeholder definition (real API coming soon).`;
    await sock.sendMessage(msg.key.remoteJid, { text: def });
  }
};