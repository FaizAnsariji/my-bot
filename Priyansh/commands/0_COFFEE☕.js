const fs = require("fs");
module.exports.config = {
	name: "Coffee",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Coffee",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Coffee")==0 || event.body.indexOf("coffee")==0 || event.body.indexOf("COFFEE ")==0 || event.body.indexOf("cofi")==0) {
		var msg = {
				body: "🙂𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐂𝐎𝐅𝐅𝐄𝐄🙂🤟",
				attachment: fs.createReadStream(__dirname + `/cache/coffee.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }