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

let des = `විදාන මෙනුව ලබා ගන්න .menu ලෙස ටයිප් කරන්න 👨‍🚀💗`

return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/YjdvYzc/file-Dk-CNr-FLShv-Gyty-Qux-Tr-N1x-Eo.webp`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
