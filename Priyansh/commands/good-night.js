const fs = require("fs");
module.exports.config = {
	name: "good night",
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
	if(react.includes("Good night") ||
     react.includes("good night") || react.includes("gn") || react.includes("LoVe") ||
react.includes("gud night") ||
react.includes("GOOD NIGHT")) {
		var msg = {
				body: `𝐆𝐎𝐎𝐃 𝐍𝐈𝐆𝐇𝐓 😴 𝐒𝐖𝐄𝐄𝐓 𝐃𝐑𝐄𝐀𝐌  😇`,attachment: fs.createReadStream(__dirname + `/noprefix/goodnight.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😴", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }