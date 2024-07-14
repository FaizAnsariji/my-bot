module.exports.config = {
  name: "Ludo",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
  if (event.body.indexOf("Ludo ka link do bot")>=0 || event.body.indexOf("ludo khele")>=0 || event.body.indexOf("link do ludo ka")>=0 || event.body.indexOf("ludo me aao")>=0 || event.body.indexOf("Ludo me aao")>=0 || event.body.indexOf("Ludo Khele")>=0 || event.body.indexOf("LUDO KHELE")>=0 || event.body.indexOf("ludo join karo")>=0 || event.body.indexOf("ludo me aao jaldi")>=0 || event.body.indexOf("LUDO KA LINK DO")>=0 ) { 
    var msg = {
        body: ` ${name} कोई काम धाम नही हैं किया अप के पास जब देखो लूडो लूडो खेलते रहते हो ।😈👈`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤐", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }