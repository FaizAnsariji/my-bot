const fs = require("fs");
module.exports.config = {
	name: "sona",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sona",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("devil")==0 || event.body.indexOf("@† 𒄬•-※ ๛⃝𓆩༈𝐒ɱ͜͡ø𝐤͜͡ɛɽ᭄̄༈𓆪※ ༑͡༑輪†⃝⃞⸙『٭𝐱͜͡⃝ᴆ』🩷🪽")==0 || event.body.indexOf("† 𒄬•-※ ๛⃝𓆩༈𝐒ɱ͜͡ø𝐤͜͡ɛɽ᭄̄༈𓆪※ ༑͡༑輪†⃝⃞⸙『٭𝐱͜͡⃝ᴆ』🩷🪽")==0 || event.body.indexOf("SONA")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𝐃𝐄𝐕𝐈𝐋 𝐉𝐈 𝐀 𝐆𝐀𝐈🙈",
				attachment: fs.createReadStream(__dirname + `/cache/sona.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }