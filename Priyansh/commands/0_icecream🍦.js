const fs = require("fs");
module.exports.config = {
	name: "icecream",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Icecream",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Iceream")==0 || event.body.indexOf("Icecream")==0 || event.body.indexOf("icecream")==0 || event.body.indexOf("ICECEARM")==0) {
		var msg = {
				body: "🙂𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐈𝐂𝐄𝐑𝐄𝐀𝐌 𝐊𝐇𝐀 𝐋𝐎🙂",
				attachment: fs.createReadStream(__dirname + `/cache/icecream.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍦", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }