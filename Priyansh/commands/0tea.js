const fs = require("fs");
module.exports.config = {
	name: "tea",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "PREM BABU", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chai")==0 || event.body.indexOf("Tea")==0 || event.body.indexOf("Chai")==0 || event.body.indexOf("Chay")==0) {
		var msg = {
				body: "☕ ये लो चाई पी लो शानू जानू☕",
				attachment: fs.createReadStream(__dirname + `/cache/Tea.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫖", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }