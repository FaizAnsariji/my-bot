const fs = require("fs");
module.exports.config = {
	name: "lolipop",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "lolopop",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lolipop")==0 || event.body.indexOf("LOLIPOP")==0 || event.body.indexOf("Lolipop ")==0 || event.body.indexOf("lolipopp")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐋𝐎𝐋𝐈𝐏𝐎𝐏 🍭",
				attachment: fs.createReadStream(__dirname + `/cache/lolipop.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }