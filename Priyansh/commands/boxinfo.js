const fs = require("fs");
const request = require("request");
module.exports.config = {
	name: "groupinfo",
	version: "1.0.0", 
	hasPermssion: 1,
	credits: "Prem babu",
	description: "View your box information",
	commandCategory: "Box", 
	usages: "groupinfo", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	let threadInfo = await api.getThreadInfo(event.threadID);
	var memLength = threadInfo.participantIDs.length;
	let threadMem = threadInfo.participantIDs.length;
	var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
     for (let z in threadInfo.userInfo) {
     	var gioitinhone = threadInfo.userInfo[z].gender;
     	var nName = threadInfo.userInfo[z].name;
        if(gioitinhone == "MALE"){gendernam.push(z+gioitinhone)}
        else if(gioitinhone == "FEMALE"){gendernu.push(gioitinhone)}
            else{nope.push(nName)}
    };
	var nam = gendernam.length;
    var nu = gendernu.length;
	let qtv = threadInfo.adminIDs.length;
	let sl = threadInfo.messageCount;
	let u = threadInfo.nicknames;
	let icon = threadInfo.emoji;
	let threadName = threadInfo.threadName;
	let id = threadInfo.threadID;
	let sex = threadInfo.approvalMode;
			var pd = sex == false ? 'Turned off' : sex == true ? 'Turned on' : 'Kh';
			var callback = () =>
				api.sendMessage(
					{
						body: `😇 𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞 👉  ${threadName}\n😍 𝐆𝐫𝐨𝐮𝐩 𝐈𝐃 👉 ${id}\n😒 𝐀𝐩𝐩𝐫𝐨𝐯𝐚𝐥 👉 ${pd}\n🙂 𝐄𝐦𝐨𝐣𝐢 👉 ${icon}\n😘 𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐦𝐛𝐞𝐫 ${threadMem} 𝐦𝐞𝐦𝐛𝐞𝐫\n🙋‍♂️ 𝐓𝐨𝐭𝐚𝐥 𝐁𝐨𝐲𝐬 👉 ${nam} 𝐦𝐞𝐦𝐛𝐞𝐫\n🙋‍♀️ 𝐓𝐨𝐭𝐚𝐥 𝐆𝐢𝐫𝐥𝐬 👉 ${nu} 𝐦𝐞𝐦𝐛𝐞𝐫\n😉 𝐓𝐨𝐭𝐚𝐥 𝐀𝐝𝐦𝐢𝐧 👉 ${qtv} 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐭𝐨𝐫𝐬\n😳 𝐓𝐨𝐭𝐚𝐥 𝐍𝐮𝐦𝐛𝐞𝐫 𝐨𝐟 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 👉 ${sl} 🥵\n\n𝐌𝐚𝐝𝐞 𝐖𝐢𝐭𝐡 𝐁𝐲 💞 👉 💝𝐎𝐖𝐍𝐄𝐑:- ☞                🥀प्रेम बाबू🌴☜ 😊\n
💞𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 〠𝐏𝐑𝐄𝐌 𝐁𝐀𝐁𝐔💞\n

🙋‍♂️𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ https://www.facebook.com/prembabu001?mibextid=ZbWKwL\n

😐 𝙵𝙾𝚁 𝙰𝙽𝚈 𝙺𝙸𝙽𝙳 𝙾𝙵 𝙷𝙴𝙻𝙿 𝙲𝙾𝙽𝚃𝙴𝙲𝚃 𝙾𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙽𝚄𝙼𝙱𝙴𝚁 👉 [+91 9501113608] 😇`,
						attachment: fs.createReadStream(__dirname + '/cache/1.png')
					},
					event.threadID,
					() => fs.unlinkSync(__dirname + '/cache/1.png'),
					event.messageID
				);
			return request(encodeURI(`${threadInfo.imageSrc}`))
				.pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
				.on('close', () => callback());
	    }