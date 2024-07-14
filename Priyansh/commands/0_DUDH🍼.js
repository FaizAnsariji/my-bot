const fs = require("fs");
module.exports.config = {
	name: "dudh",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "dudh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("dudh")==0 || event.body.indexOf("DUDH")==0 || event.body.indexOf("DHUD")==0 || event.body.indexOf("Dudh")==0) {
		var msg = {
				body: "😋𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐃𝐔𝐃𝐇😋🤟",
				attachment: fs.createReadStream(__dirname + `/cache/dudh.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍼", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }