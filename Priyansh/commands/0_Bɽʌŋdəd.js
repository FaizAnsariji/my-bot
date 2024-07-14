const fs = require("fs");
module.exports.config = {
	name: "Bɽʌŋdəd",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Bɽʌŋdəd",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bɽʌŋdəd Kʌməəŋí")==0 || event.body.indexOf("ANGEL")==0 || event.body.indexOf("KAMINI")==0 || event.body.indexOf("@Bɽʌŋdəd Kʌməəŋí")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𝐁𝐑𝐀𝐍𝐃𝐄𝐃 𝐉𝐈 𝐀 𝐆𝐀𝐈🙈",
				attachment: fs.createReadStream(__dirname + `/cache/Bɽʌŋdəd.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }