const fs = require("fs");
module.exports.config = {
	name: "chips",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Chips",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chips")==0 || event.body.indexOf("Chips")==0 || event.body.indexOf("CHIPS ")==0 || event.body.indexOf("Chipas")==0) {
		var msg = {
				body: "🙂𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐂𝐇𝐈𝐏𝐒😋🤟",
				attachment: fs.createReadStream(__dirname + `/cache/chips.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥟", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }