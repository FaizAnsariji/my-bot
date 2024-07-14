const fs = require("fs");
module.exports.config = {
	name: "emoji-reply-2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ludo khele")==0 || event.body.indexOf("Ludo link")==0 || event.body.indexOf("LUDO KHELE")==0 || event.body.indexOf("LUDO LINK")==0 || event.body.indexOf("ludo link")==0 || event.body.indexOf("ludo me aao")==0 || event.body.indexOf("Ludo khelega")==0 || event.body.indexOf("ludo me aao jaldi")==0 || event.body.indexOf("ludo link du")==0 || event.body.indexOf("link do ludo ka")==0 || event.body.indexOf("ludo join karo")==0 || event.body.indexOf("LUDO KA LINK DU MAI")==0) {
		var msg = {
				body: "कोई काम धाम नहीं है क्या जब देखो जब देखो यही सब करते रहते तुम लोग😐🫤",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }