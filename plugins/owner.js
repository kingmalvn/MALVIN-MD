const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*🧚‍♂️ QUEEN NETHU-MD Whatsapp Bot*

*| ᴏᴡɴᴇʀ ɴᴀᴍᴇ*: ᴍᴀʟᴠɪɴ ᴋɪɴɢ
*| ɴᴜᴍʙᴇʀ*: 97742135085
*| ʏᴏᴜᴛᴜʙᴇ*: https://youtube.com/@sihina_paradise?si=QABfCWh7Ez9OoY25
*| ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ*: https://chat.whatsapp.com/GKMLM6ejFGr59hTKZo4mnx

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ɴᴇᴛʜᴜ-ᴍᴅ
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/G7SDTrF/20241112-203318.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
