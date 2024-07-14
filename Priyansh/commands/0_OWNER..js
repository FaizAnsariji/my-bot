const fs = require("fs");
module.exports.config = {
	name: "Azaan",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Azaan",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Azaan")==0 || event.body.indexOf("azaan")==0 || event.body.indexOf("AZAAN")==0 || event.body.indexOf("@O.O　ါါါါါါါါါါါါါAzaan　ါါါါါါါါါါAnsariါါါါါါါါါါါါါါါ　o.O V　E　R　I　F　I　E　D　　o.O Vip　A҉　C҉　C҉　O҉　U҉　N҉　T҉　ịးးးCးးးrးးးeးးးaးးးtးးးeးးးdးးးị By　Mr.Fi　G　H　T　E　R　R　A")==0) {
		var msg = {
				body: "𝐒𝐁 𝐇𝐀𝐓𝐎 𝐎𝐖𝐍𝐄𝐑 𝐉𝐈 𝐀 gaye🙈",
				attachment: fs.createReadStream(__dirname + `/cache/azaan.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }