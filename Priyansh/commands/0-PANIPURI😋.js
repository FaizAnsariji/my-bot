const fs = require("fs");
module.exports.config = {
	name: "panipuri",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Panipuri",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("panipuri")==0 || event.body.indexOf("Panipuri")==0 || event.body.indexOf("GOLGAPPE")==0 || event.body.indexOf("Golgappe")==0) {
		var msg = {
				body: "🙂𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐏𝐀𝐍𝐈𝐏𝐔𝐑𝐈🤟🙂",
				attachment: fs.createReadStream(__dirname + `/cache/panipuri.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }