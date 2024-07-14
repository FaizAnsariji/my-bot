const fs = require("fs");
module.exports.config = {
	name: "khushnuma",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "khushnuma",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("khushnuma")==0 || event.body.indexOf("Khushnuma")==0 || event.body.indexOf("KHUSHNUMA")==0 || event.body.indexOf("😘MOTTI😘")==0) {
		var msg = {
				body: "𝐊𝐇𝐔𝐒𝐇𝐍𝐔𝐌𝐀 𝐉𝐈 𝐀 𝐆𝐀𝐈",
				attachment: fs.createReadStream(__dirname + `/cache/khushnuma.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }