module.exports.config = {
  name: "call",
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
  if (event.body.indexOf("call aa")>=0 || event.body.indexOf("Call")>=0 || event.body.indexOf("CALL")>=0 || event.body.indexOf(" Bot call")>=0 || event.body.indexOf("CLL")>=0 || event.body.indexOf("CL")>=0 || event.body.indexOf("Call aao")>=0 || event.body.indexOf("Call tapko")>=0 || event.body.indexOf("call tapko")>=0 || event.body.indexOf("Call bot")>=0 ) { 
    var msg = {
        body: ` ${name} मैं अभी 📞कॉल पर नहीं आ सकता मैं सूसू करने जा रहा हूं━━•☆🏃🥺🥺👈`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📞", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }