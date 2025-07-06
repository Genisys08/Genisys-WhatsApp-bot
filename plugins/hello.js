module.exports = {
  name: "hello",
  description: "Replies with a greeting",
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, {
      text: "👋 Hello! I am Genisys.",
    });
  }
};
