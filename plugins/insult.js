module.exports = {
  name: "insult",
  description: "Real command 15",
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: `You have something on your chin... no, the third one down.` });
  }
};