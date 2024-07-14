const fs = require("fs");
module.exports.config = {
	name: "rose",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "rose",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("rose")==0 || event.body.indexOf("Rose")==0 || event.body.indexOf("ROSE")==0 || event.body.indexOf("rosse")==0) {
		var msg = {
				body: "🌹𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐑𝐎𝐒𝐄 𝐋𝐎🌹",
				attachment: fs.createReadStream(__dirname + `/cache/rose.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }