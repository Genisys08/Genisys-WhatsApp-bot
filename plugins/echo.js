module.exports = {
  name: "echo",
  description: "Repeats your message",
  run: async (sock, msg, args) => {
    const text = args.join(" ") || "You didn’t say anything!";
    await sock.sendMessage(msg.key.remoteJid, { text });
  }
};