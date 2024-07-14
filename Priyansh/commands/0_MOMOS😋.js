const fs = require("fs");
module.exports.config = {
	name: "momos",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "momos",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("momos")==0 || event.body.indexOf("Momos")==0 || event.body.indexOf("MOMOS")==0 || event.body.indexOf("MOMOSS")==0) {
		var msg = {
				body: "😋𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐌𝐎𝐌𝐎𝐒🙂",
				attachment: fs.createReadStream(__dirname + `/cache/momos.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }