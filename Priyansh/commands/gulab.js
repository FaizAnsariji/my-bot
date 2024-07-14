const fs = require("fs");
module.exports.config = {
	name: "gulab",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "gulab",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("gulab")==0 || event.body.indexOf("Gulab")==0 || event.body.indexOf("GULABB")==0 || event.body.indexOf("GULAB")==0) {
		var msg = {
				body: "𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐆𝐔𝐋𝐀𝐁 🙈",
				attachment: fs.createReadStream(__dirname + `/cache/gulab.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }