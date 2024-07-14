const fs = require("fs");
module.exports.config = {
  name: "chutiya",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("chutiya") ||
     react.includes("Chutiya") || react.includes("CHUTIYA") || react.includes("chutiye") ||
react.includes("Chutiye") ||
react.includes("CHUTIYE")) {
    var msg = {
        body: `तु चुतिया तेरा बाप चुतिया तेरा पूरा खानदान चुतिया।🤯😐😒👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }