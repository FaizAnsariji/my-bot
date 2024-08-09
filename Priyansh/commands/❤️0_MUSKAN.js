const fs = require("fs");
module.exports.config = {
  name: "muskan",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Arman",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@Masoom Kudi")==0 || event.body.indexOf("Masoom")==0 || event.body.indexOf("Masoom kudi")==0 || event.body.indexOf("MASOOM")==0) {
    var msg = {
        body: "𝐘𝐄 𝐃𝐄𝐊𝐇𝐎 𝐌𝐀𝐒𝐎𝐎𝐌 𝐉𝐈 𝐀 𝐆𝐘𝐄",
        attachment: fs.createReadStream(__dirname + `/noprefix/muskan.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }