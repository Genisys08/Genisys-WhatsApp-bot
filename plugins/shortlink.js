module.exports = {
  name: "shortlink",
  description: "Shorten a link (fake shortener)",
  run: async (sock, msg, args) => {
    const url = args[0];
    if (!url) return sock.sendMessage(msg.key.remoteJid, { text: "Please provide a link." });
    const fakeShort = "https://tiny.one/" + Math.random().toString(36).substring(2, 8);
    await sock.sendMessage(msg.key.remoteJid, { text: `🔗 Shortened: ${fakeShort}` });
  }
};