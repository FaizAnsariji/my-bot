//https://list.ly/api/v4/meta?url=
//var a = res.data.name;
//var b = res.data.description;
//var c = res.data.image;
﻿module.exports.config = {
  name: "botruls",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "View site info",
  commandCategory: "info",
  usages: "[site]",
  cooldowns: 5
};

module.exports.run = async (
{
  api,
  event,
  args
}) =>
{
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var juswa = args.join(" ");
  if (!juswa) return api.sendMessage(`बोट रोल्स जो एक ही मैसेज बार-बार करेगा उसे वोट सस्पेंड कर देगा और जो बार-बार टांग या परेशान करेगा या गाली देगा उसे बोट सस्पेंड कर देगा कृपया इन बातों का ध्यान रखें  बूट बॉस फैज अंसारी. धन्यवाद🙏`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://list.ly/api/v4/meta?url=${encodeURIComponent(juswa)}`).then(res =>
    {
      let a = res.data.name,
        b = res.data.description,
        d = res.data.url
      var c = res.data.image;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `Name: ${a}\n\nDescription: ${b}\n\nRelease Date: ${date}\n\nUrl: ${d}`,
          attachment: fs.createReadStream(__dirname + `/cache/juswa.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/juswa.png`), event.messageID);
      };
      request(encodeURI(c)).pipe(fs.createWriteStream(__dirname + `/cache/juswa.png`)).on("close", callback);
    })
  }
}