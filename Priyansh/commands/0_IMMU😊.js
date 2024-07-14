const fs = require("fs");
module.exports.config = {
	name: "IMMU",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "IMMU",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("IMMU")==0 || event.body.indexOf("Immu")==0 || event.body.indexOf("Sabse Bada Khiladi ")==0 || event.body.indexOf("@Sabse Bada Khiladi")==0) {
		var msg = {
				body: "💝 ये लो इमरान की पिक 🙂🤟",
				attachment: fs.createReadStream(__dirname + `/cache/immu.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👼", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }