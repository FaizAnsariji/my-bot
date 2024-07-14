const fs = require("fs");
module.exports.config = {
	name: "POPCORN",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "popcorn",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("POPCORN")==0 || event.body.indexOf("popcorn")==0 || event.body.indexOf("Popcorn")==0 || event.body.indexOf("popcon")==0) {
		var msg = {
				body: "💝𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐏𝐎𝐏𝐂𝐎𝐑𝐍🤟",
				attachment: fs.createReadStream(__dirname + `/cache/popcorn.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍿", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }