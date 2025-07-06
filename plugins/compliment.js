module.exports = {
  name: "compliment",
  description: "Real command 16",
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: `You are like a cloud. When you disappear, it’s a beautiful day.` });
  }
};