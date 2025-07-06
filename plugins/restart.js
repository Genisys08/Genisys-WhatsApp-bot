module.exports = {
  name: "restart",
  description: "Real command 20",
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: `Restarting bot... (just kidding, I never sleep 😎)` });
  }
};