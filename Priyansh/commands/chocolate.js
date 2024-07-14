const fs = require("fs");
module.exports.config = {
	name: "chocolate",
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
	if(react.includes("Chocolate") ||
     react.includes("chocolate") || react.includes("chocolate") || react.includes("Chocolate") ||
react.includes("choco") ||
react.includes("Choco")) {
		var msg = {
				body: `💝 ये लो बाबू चॉकलेट खाओ 🙂🤟`,attachment: fs.createReadStream(__dirname + `/cache/choco.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍫", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }