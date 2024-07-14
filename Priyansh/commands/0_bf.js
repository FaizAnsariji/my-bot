const fs = require("fs");
module.exports.config = {
	name: "bf",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "bf",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bf")==0 || event.body.indexOf("Bf")==0 || event.body.indexOf("Ladka")==0 || event.body.indexOf("ladka")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𝐌𝐀𝐈 𝐀 𝐆𝐘𝐀 𝐀𝐀𝐏 𝐊𝐀 𝐁𝐅🙈",
				attachment: fs.createReadStream(__dirname + `/cache/bf.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }