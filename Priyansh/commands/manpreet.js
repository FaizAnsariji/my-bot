const fs = require("fs");
module.exports.config = {
	name: "Manpreet",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Prem babu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Manpreet kaur",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Kamini")==0 || event.body.indexOf("manpreet")==0 || event.body.indexOf("kamini")==0 || event.body.indexOf("@Manpreet Kaur")==0) {
		var msg = {
				body: "MY CUTEE BABU MANPREET KAUR 🥰",
				attachment: fs.createReadStream(__dirname + `/cache/manpreet.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }