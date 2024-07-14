const fs = require("fs");
module.exports.config = {
	name: "samose",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "samose",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Samose")==0 || event.body.indexOf("samosa")==0 || event.body.indexOf("SAMOSE")==0 || event.body.indexOf("SAMOSA")==0) {
		var msg = {
				body: "🙂𝙔𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐒𝐀𝐌𝐎𝐒𝐄🙂",
				attachment: fs.createReadStream(__dirname + `/cache/samose.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }