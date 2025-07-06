module.exports = {
  name: "weather",
  description: "Real command 12",
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: `The weather today is sunny ☀️ with 27°C.` });
  }
};