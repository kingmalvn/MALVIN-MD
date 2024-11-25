const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*
          
📍𝖱𝖾𝗉𝗈 𝖫𝗂𝗇𝗄 ❤️‍🔥👇

👨‍💻◦ Cooming Coon

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖲𝗎𝖻𝗌𝖼𝗋𝗂𝖻𝖾 𝖬𝗒 𝖸𝗈𝗎𝗍𝗎𝖻𝖾 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ https://youtube.com/@sihina_paradise?si=bauOkmkPIAJIdAeb

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖥𝗈𝗅𝗅𝗈𝗐 𝖬𝗒 𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉 Group  👇

👨‍💻◦ https://chat.whatsapp.com/GKMLM6ejFGr59hTKZo4mnx

> *©©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ɴᴇᴛʜᴜ-ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/G7SDTrF/20241112-203318.jpgQUEEN NETHU-MD`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
