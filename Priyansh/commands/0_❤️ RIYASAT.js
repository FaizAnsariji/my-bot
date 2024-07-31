const fs = require("fs");
module.exports.config = {
  name: "riyasat",
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
  if (event.body.indexOf("@Riyasat Ali")==0 || event.body.indexOf("riyasat")==0 || event.body.indexOf("Riyasat")==0 || event.body.indexOf("Riyasat Ali")==0) {
    var msg = {
        body: "❤️𝐘𝐄 𝐃𝐄𝐊𝐇𝐎 𝐑𝐈𝐘𝐀𝐒𝐀𝐓 𝐉𝐈 𝐀 𝐆𝐘𝐄❤️",
        attachment: fs.createReadStream(__dirname + `/FAIZ/riyasat.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }