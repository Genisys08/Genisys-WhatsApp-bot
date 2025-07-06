module.exports = {
  name: "time",
  description: "Get current time",
  run: async (sock, msg, args) => {
    const time = new Date().toLocaleTimeString();
    await sock.sendMessage(msg.key.remoteJid, { text: `🕒 Current time: ${time}` });
  }
};