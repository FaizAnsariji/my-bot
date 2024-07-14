module.exports.config = {
  name: "vtsdp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FAIZ ANSARI",
  description: "vts dp",
  commandCategory: "Random-IMG",
  usages: "vts dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/Snz5uuv.jpg","https://i.imgur.com/XN53OXn.jpg","https://i.imgur.com/ffmh8KE.jpg","https://i.imgur.com/goJq5mj.jpg","https://i.imgur.com/oCrBLwm.jpg","https://i.imgur.com/ZJihP18.jpg","https://i.imgur.com/MHQ93sO.jpg","https://i.imgur.com/aaCashn.jpg","https://i.imgur.com/POYHrkt.jpg","https://i.imgur.com/lPlJJP1.jpg","https://i.imgur.com/3Nykgcf.jpg","https://i.imgur.com/MWRghky.jpg","https://i.imgur.com/GzjD0ob.jpg","https://i.imgur.com/RtG4CZz.jpg","https://i.imgur.com/XGDbdZ0.jpg","https://i.imgur.com/X6uQ6Y5.jpg","https://i.imgur.com/s0Bo0R1.jpg","https://i.imgur.com/E07HVpf.jpg","https://i.imgur.com/o0enkbq.jpg","https://i.imgur.com/khmFm8M.jpg","https://i.imgur.com/VfdtN4T.jpg","https://i.imgur.com/9fRBqWO.jpg","https://i.imgur.com/wxtpaMu.jpg","https://i.imgur.com/pezOW8j.jpg","https://i.imgur.com/tLNXZZH.jpg","https://i.imgur.com/UzScRgz.jpg","https://i.imgur.com/MtDFo5x.jpg","https://i.imgur.com/6tRG6UU.jpg","https://i.imgur.com/ZvT3mku.jpg","https://i.imgur.com/ghf03FH.jpg","https://i.imgur.com/kV1e7LU.jpg","https://i.imgur.com/PJx8UR8.jpg","https://i.imgur.com/50fXN5y.jpg","Replied: https://i.imgur.com/05ai3MF.jpg","https://i.imgur.com/xzX1PcZ.jpg","https://i.imgur.com/Xx9Vfti.jpg","https://i.imgur.com/G9T4ESO.jpg","https://i.imgur.com/Nb3vWfR.jpg","https://i.imgur.com/WWiVuT8.jpg","https://i.imgur.com/O28dCZ7.jpg","https://i.imgur.com/SIgLgXh.jpg","https://i.imgur.com/ncAromJ.jpg","https://i.imgur.com/7SXyw3S.jpg","https://i.imgur.com/2cqx8c8.jpg","https://i.imgur.com/z94ncZY.jpg","https://i.imgur.com/9PH1cz8.jpg","https://i.imgur.com/8wwXgVO.jpg","https://i.imgur.com/5cu8xSv.jpg","https://i.imgur.com/efP20fx.jpg","https://i.imgur.com/HH1fABC.jpg","https://i.imgur.com/ZWlvO5G.jpg","https://i.imgur.com/SABJSZ9.jpg","https://i.imgur.com/pxCZT8N.jpg","https://i.imgur.com/rfPPMfm.jpg","https://i.imgur.com/50fEOT6.jpg","https://i.imgur.com/30wdpu5.jpg","https://i.imgur.com/H7WNliw.jpg","https://i.imgur.com/1VxOFHI.jpg","https://i.imgur.com/sP27yvZ.jpg","https://i.imgur.com/Y890VlO.jpg","https://i.imgur.com/xoqHgXi.jpg","https://i.imgur.com/tB2J8NJ.jpg","https://i.imgur.com/pt4BuOt.jpg","https://i.imgur.com/L3gzSiU.jpg","https://i.imgur.com/kU8Wup4.jpg","https://i.imgur.com/mRepvqI.jpg","https://i.imgur.com/FoXs0PH.jpg","https://i.imgur.com/a6nFpqX.jpg","https://i.imgur.com/88hkatO.jpg","https://i.imgur.com/Q7ui7X1.jpg","https://i.imgur.com/jhsaSoS.jpg",
     ];
     var callback = () => api.sendMessage({body:`💝 𝐅𝐀𝐈𝐙 𝐊𝐈 𝐅𝐄𝐕𝐑𝐄𝐓 𝐃𝐏 💝`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   }