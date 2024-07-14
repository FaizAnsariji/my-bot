const API = "https://api.ch4nd.repl.co/api/textpro?number=66&text="
module.exports.config = {
	name: "logowood",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "PREM BABU",
	description: "logo",
	commandCategory: "text maker",
	usages: "...",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
if (this.config.credits != "PREM BABU") {
        console.log("[ WARNING ] » Change credited Fuck You By PREM :p  :) "+ global.config.BOTNAME + ' credits modules "' + this.config.name + '"');
        return api.sendMessage("× [ WARNING ] × LOL CREDIT CHANGED FUCK YOUR SISTER BY PREM 😹🖐🏻" , event.threadID, event.messageID);
}
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage("💝 पांच सेकेंड रुको अभी देता हूं 💝", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: "💝 ये लो आपका लोगो 💝", attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Đã xảy ra lỗi ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};