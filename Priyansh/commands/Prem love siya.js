const fs = require("fs");
module.exports.config = {
	name: "Couple",
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
	if(react.includes("COUPLE") ||
     react.includes("couple") || react.includes("faiz ki gf") || react.includes("Couple") ||
react.includes("faiz ki gf") ||
react.includes("MAHI KA BF KON HAI")) {
		var msg = {
				body: `💝 𝗙𝗔𝗜𝗭 𝐗3 𝗠𝗔𝗛𝗜 💝`,attachment: fs.createReadStream(__dirname + `/lovemahi/.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }