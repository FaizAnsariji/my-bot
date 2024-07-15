module.exports.config = {
  name: "inf",
  version: "1.0.1", 
  hasPermssion: 0,
  credits:"FAIZ" ,
  description: "Admin and Bot info.",
  commandCategory: "...",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://imgur.com/a/WvTgGPU","https://i.imgur.com/mFSG8lH.jpg","https://i.imgur.com/zoDE1L3.jpg"];
var callback = () => api.sendMessage({body:`🌹𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍🌹

🍁Bot Name︎︎🍁 👉 ${global.config.BOTNAME}

🔥Bot Admin🔥 ☞︎︎︎𝙵𝚊𝚒𝚣✰𝙰𝚗𝚜𝚊𝚛𝚒☜︎︎︎ 

🙈Bot Admin Owner Facebook id link🙈 https://www.facebook.com/profile.php?id=100077090468343&mibextid=ZbWKwL💞🕊️

👋घास☘️की🌲झोपड़ी🌳कच्चा🏠मेरा मकान🏡 जयपुर का💒रहने वाला फैज🤸‍♂️👈मेरा😝 नाम😇

✧══════•❁❀❁•══════✧

🌸Bot Prefix🌸 ☞︎︎︎${global.config.PREFIX}☜︎︎︎

♥️Bot Owner♥️ ☞︎︎︎फैज अंसारी☜︎︎︎

🥳UPTIME🥳

💋Today is ☞︎︎︎${juswa}☜︎︎︎ 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

🌹THANKYOU FOR USING ${global.config.BOTNAME} BOT🌹


🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✧✧✰🍒FAIZ🌿✰✧✧✧✦🌸✨ ❤️ 
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };