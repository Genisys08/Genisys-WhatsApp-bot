module.exports = {
  name: "botinfo",
  description: "Real command 9",
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: `Genisys Bot v1.0 - Powered by Baileys` });
  }
};