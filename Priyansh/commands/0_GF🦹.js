const fs = require("fs");
module.exports.config = {
	name: "gf",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "gf",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("gf")==0 || event.body.indexOf("GF DO MUJHE BOT")==0 || event.body.indexOf("ladki")==0 || event.body.indexOf("Ladki")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐆𝐅 🙈",
				attachment: fs.createReadStream(__dirname + `/cache/gf.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🦹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }