const API = "https://api.violetics.pw/api/textpro/thundertext?apikey=9b05-9b0e-2953&text="
module.exports.config = {
	name: "thunder",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
	description: "thunder logo",
	commandCategory: "text maker",
	usages: "thunder<text>",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    anup = args.join(" ");
    (event.type == "message_reply") ? anup = event.messageReply.attachments[0].url: anup = args.join(" ");
    const pathsave = __dirname + `/cache/banner2.png`;
    let imageBuffer;
    api.sendMessage("〠ↈ༽𝙆𝙪𝙘𝙝 𝘿𝙚𝙧 𝙍𝙪𝙠𝙤 𝙇𝙤𝙜𝙤 𝙈𝙞𝙡 𝙅𝙖𝙮𝙚𝙜𝙖 𝘼𝙥𝙠𝙤༼ↈ〠", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(anup)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `ↈ⋈༽𝙔𝙚 𝙇𝙤 𝘼𝙥𝙠𝙖 𝙇𝙤𝙜𝙤༼⋈ↈ`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`An error has occurred ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};