module.exports.config = {
  name: "owner",
  version: "2.0.5",
  hasPermssion: 0,
  credits: "FAIZ ANSARI",
  description: "photo",
  commandCategory: "Fun picture ",
  usages: "",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://imgur.com/wxxrW0D" ,
     ];
     var callback = () => api.sendMessage({body:`🙂𝐘𝐄 𝐋𝐎 𝐎𝐖𝐍𝐄𝐑 𝐉𝐈 𝐀 𝐆𝐀𝐘𝐄🙂`,attachment: fs.createReadStream(__dirname + "/cache/AOV.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/AOV.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/AOV.jpg")).on("close",() => callback());
   };