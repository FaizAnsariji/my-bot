const fs = require("fs");
module.exports.config = {
	name: "lassi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "lassi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lassi")==0 || event.body.indexOf("Lassi")==0 || event.body.indexOf("LASSI")==0 || event.body.indexOf("LASSEE")==0) {
		var msg = {
				body: "😋𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐋𝐀𝐒𝐒𝐈🙂",
				attachment: fs.createReadStream(__dirname + `/cache/lassi.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥛", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }