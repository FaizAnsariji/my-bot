const fs = require("fs");
module.exports.config = {
	name: "ib",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "ib",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ib me aao")==0 || event.body.indexOf("bot ib me ao")==0 || event.body.indexOf("IB ME AAO BOT")==0 || event.body.indexOf("Ib me chalo")==0) {
		var msg = {
				body: "😇𝐎𝐊 𝐓𝐇𝐈𝐊 𝐇𝐀𝐈 𝐂𝐇𝐀𝐋𝐎 𝐈𝐁🙈",
				attachment: fs.createReadStream(__dirname + `/cache/ib.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }