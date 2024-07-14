const fs = require("fs");
module.exports.config = {
	name: "juices",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "juice",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("juice")==0 || event.body.indexOf("juices")==0 || event.body.indexOf("Juice")==0 || event.body.indexOf("JUICE")==0) {
		var msg = {
				body: "🤟𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐉𝐔𝐈𝐂𝐄 𝐋𝐎🙂",
				attachment: fs.createReadStream(__dirname + `/cache/juices.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }