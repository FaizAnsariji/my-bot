const fs = require("fs");
module.exports.config = {
	name: "jalebi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "jalebi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("jalebi")==0 || event.body.indexOf("JALEBI")==0 || event.body.indexOf("JABELI")==0 || event.body.indexOf("Jalebi")==0) {
		var msg = {
				body: "😋𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐉𝐀𝐋𝐄𝐁𝐈😋🤟",
				attachment: fs.createReadStream(__dirname + `/cache/jalebi.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }