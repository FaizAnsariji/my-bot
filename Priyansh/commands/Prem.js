const fs = require("fs");
module.exports.config = {
	name: "Prem babu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Prem babu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Prem",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("faiz ki pic")==0 || event.body.indexOf("AZAAN KI PICK")==0 || event.body.indexOf("@Faiz ansari")==0) {
		var msg = {
				body: "ये लो फैज अंसारी की फोटो 💝",
				attachment: fs.createReadStream(__dirname +`/cache/faiz.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }