const fs = require("fs");
module.exports.config = {
        name: "RIYASHAT",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "FAIZ ANSARI", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "IMMU",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("@RIYASAT")==0 || event.body.indexOf("riyashat")==0 || event.body.indexOf("RIYASAT")==0 || event.body.indexOf("Riyasath")==0) {
                var msg = {
                                body: "💝 ये लो इमरान की पिक 🙂🤟",
                                attachment: fs.createReadStream(__dirname + `/cache/RIYU.jpeg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👼", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }