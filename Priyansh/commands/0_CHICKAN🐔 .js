const fs = require("fs");
module.exports.config = {
	name: "chicken",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "chicken",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chicken")==0 || event.body.indexOf("Chicken")==0 || event.body.indexOf("CHICKEN")==0 || event.body.indexOf("CHIKAN")==0) {
		var msg = {
				body: "𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐂𝐇𝐈𝐂𝐊𝐄𝐍 𝐊𝐇𝐀𝐎🙈",
				attachment: fs.createReadStream(__dirname + `/cache/chicken.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }