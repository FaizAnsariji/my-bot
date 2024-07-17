module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "FAIZ ANSARI",
	description: "THIS BOT IS MADE BY FAIZ ANSARI",
	commandCategory: "BOT-TURN-OFF",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["61552656562989", "100086169630526"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("आपको इस कमांड को उपयोग करने की परमिशन नही है।\nये कमांड सिर्फ मेरे बॉस फैज अंसारी के लिए है। 🙂🙂✌️", event.threadID, event.messageID);
  api.sendMessage(`┏━━━━━┓\n     फैज-अंसारी                   ✧═══•❁😛❁•═══✧\n┗━━━━━┛\n\nOK BYE ALL FRIENDS\n${global.config.BOTNAME} BOT AB OFF HO RAHA HAI\nBYE BYE LADKIYO MERA INTZAAR KRNA 😒✌️\n\n❁ ═════════ ❃AZAAN-ANSARI❃ ═════════ ❁`,event.threadID, () =>process.exit(0))
}