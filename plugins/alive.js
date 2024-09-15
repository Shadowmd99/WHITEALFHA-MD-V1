const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👨‍💻 Hello WHITEALFHA  MD TESTING ❮❮💗*

⚡𝗛𝗘𝗟𝗟𝗢𝗪 ┇ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 ⚡

*💗 Nice to meat you*

*► HI I'M ALOVE NOW👾*

*🔖We welcome the new arrivals of the digital world_►*

*❯ Welcome whitealfha md whats app bot you can download video songs and various videos through this bot. Shado md owner is Lakshan Damayantha.. It also gives you the ability to solve the new revolution in technology and technology problems and there is great potential here. This technology is also related to AI.*

> *➣ ᴏᴡɴᴇʀ : whitealfhaoficial*

> *➣ ᴜᴘ ᴛɪᴍᴇ : 2 ʜᴏᴜʀꜱ 1 ᴍɪɴɪᴛꜱ*

> *➣ ʀᴀᴍ ᴜꜱᴇɢᴇ : 167/1024ᴍʙ*

> *➣ ᴠᴇʀꜱɪᴏɴ : 1.0.0*

*┇Always smile and life will be beautiful💗*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ whitealfhaoficial*✨`

return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/p22J5nQ/file-1nh1gowb-Fqjz1-YJGzgo8u1e-J.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
