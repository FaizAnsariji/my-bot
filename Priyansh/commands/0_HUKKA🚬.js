const fs = require("fs");
module.exports.config = {
	name: "hukka",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "hukka",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hukka")==0 || event.body.indexOf("Hukka")==0 || event.body.indexOf("HUKKA")==0 || event.body.indexOf("Hukkaa ")==0) {
		var msg = {
				body: "😁𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐇𝐔𝐊𝐊𝐀 😁",
				attachment: fs.createReadStream(__dirname + `/cache/hukka.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }