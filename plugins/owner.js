module.exports = {
  name: "owner",
  description: "Real command 5",
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: `Bot owner: +234XXXXXXXXXX` });
  }
};