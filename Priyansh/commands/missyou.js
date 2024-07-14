const fs = require("fs");
module.exports.config = {
	name: "Miss you",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Miss") ||
     react.includes("I miss") || react.includes("miSS") || react.includes("miSs") ||
react.includes("miss") ||
react.includes("Miss")) {
		var msg = {
				body: `‌𝑰 𝑴𝑰𝑺𝑺 𝒀𝑶𝑼 𝑻𝑶𝑶 𝑱𝑨𝑨𝑵 😌🤘`,attachment: fs.createReadStream(__dirname + `/noprefix/missyou.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }