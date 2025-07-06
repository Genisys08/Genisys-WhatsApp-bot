module.exports = {
  name: "coin",
  description: "Flip a coin",
  run: async (sock, msg, args) => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    await sock.sendMessage(msg.key.remoteJid, { text: `🪙 ${result}` });
  }
};