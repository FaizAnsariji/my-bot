module.exports.config = {
    name:"umaru",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "John Lester",
    description: "Chat AI by John Lester\nyou can fuck\nUmaru using\nhorny words",
    commandCategory: "Sex on chat with umaru",
    usages: "[question]/[on,off]\nif you want to teach type this /help umaruteach\n",
    cooldowns: 5
};

const axios = require('axios');

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'umaru.json');
    if (!existsSync(path)) {
        const obj = {
            umaru: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('umaru')) data.umaru = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}

module.exports.handleEvent = async ({ api, event, args, Threads }) => {
    const { threadID, messageID } = event;
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'cache', 'umaru.json');
    const { umaru } = require(path);

    if (umaru.hasOwnProperty(threadID) && umaru[threadID] == true) {
      if (event.senderID !== api.getCurrentUserID()) {
      axios.get(encodeURI(`https://umaru-api-33012509.umaru33012509.repl.co/umaru/get/${event.body}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "I don't understand what your saying. please teach me") {
                api.sendMessage("Umaru doesn't understand, teach umaru go :(",threadID,messageID)
            } else {
                return api.sendMessage(res.data.reply, threadID, messageID);
            }
    })
    }  
    }
}

module.exports.run = async ({ api, event, args, Threads }) => {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'umaru.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { umaru } = database;

    if (!args[0]) { api.sendMessage("Ask umaru. ask.", threadID, messageID) } else {
        switch(args[0]) {
            case "on": {
                umaru[threadID] = true;
                api.sendMessage("Umaru AI chat successfully on", threadID);
                break;
            }
            case "off": {
                umaru[threadID] = false;
                api.sendMessage("Umaru AI chat successfully off", threadID);
                break;
            }
            default:
            axios.get(encodeURI(`https://umaru-api-33012509.umaru33012509.repl.co/umaru/get/${args.join(" ")}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "I don't understand what your saying. please teach me") {
                api.sendMessage("I don't understand what your saying. please teach me",threadID,messageID)
            } else {
                return api.sendMessage(res.data.reply, threadID, messageID);
            }
            });
            break;
        }
        writeFileSync(path, JSON.stringify(database, null, 4));
    }
}
