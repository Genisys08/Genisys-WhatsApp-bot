module.exports = {
  name: "sticker",
  description: "Convert image to sticker",
  run: async (sock, msg, args) => {
    const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    if (!quoted || !quoted.imageMessage) {
      return sock.sendMessage(msg.key.remoteJid, { text: "Please reply to an image with !sticker." });
    }
    const media = await sock.downloadAndSaveMediaMessage({ message: quoted }, 'sticker.jpg');
    await sock.sendMessage(msg.key.remoteJid, { sticker: { url: media } });
  }
};