const fs = require("fs");
module.exports.config = {
	name: "bhak",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "bhak",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bakk")==0 || event.body.indexOf("bhakk")==0 || event.body.indexOf("BHAKK")==0 || event.body.indexOf("BAKK")==0) {
		var msg = {
				body: "𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐌𝐀𝐈 𝐁𝐇𝐀𝐊 𝐑𝐀𝐇𝐀🙈",
				attachment: fs.createReadStream(__dirname + `/cache/bhak.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🏃", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }