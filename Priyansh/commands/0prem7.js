const fs = require("fs");
module.exports.config = {
	name: "Asslam walikum",
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
	if (event.body.indexOf("Asslamualaikum")==0 || event.body.indexOf("Asslam walikum")==0 || event.body.indexOf("ASALAMU ALAIKUM")==0 || event.body.indexOf("Asslam walikum")==0 || event.body.indexOf("Assalamuslikum")==0 || event.body.indexOf("SALAM ALAIKUM")==0 || event.body.indexOf("SALAMALEKUM")==0 || event.body.indexOf("Assalamu alakum good afternoon")==0 || event.body.indexOf("Assalam o alaikum")==0 || event.body.indexOf("ASSLAMO WALAIKUM")==0 || event.body.indexOf("Assalamualaikum sbko")==0 || event.body.indexOf("Assalamualaikum")==0) {
		var msg = {
				body: "Walakum assalam😇😇❤️",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }