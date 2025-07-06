module.exports = {
  name: "hello",
  description: "Real command 1",
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: `Hello! I am Genisys, your WhatsApp assistant.` });
  }
};