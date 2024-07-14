const fs = require("fs");
module.exports.config = {
	name: "sad",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sad",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("sad")==0 || event.body.indexOf("Sad")==0 || event.body.indexOf("sad hu")==0 || event.body.indexOf("SAD HU")==0) {
		var msg = {
				body: "🙂𝐒𝐀𝐃 𝐍𝐀 𝐇𝐎 𝐁𝐀𝐁𝐘 𝐏𝐋𝐈𝐙𝐙🙂",
				attachment: fs.createReadStream(__dirname + `/cache/sad.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }