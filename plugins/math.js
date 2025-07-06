module.exports = {
  name: "math",
  description: "Solve a simple math expression",
  run: async (sock, msg, args) => {
    try {
      const expr = args.join(" ");
      const result = eval(expr);
      await sock.sendMessage(msg.key.remoteJid, { text: `🧮 ${expr} = ${result}` });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: "Invalid math expression." });
    }
  }
};