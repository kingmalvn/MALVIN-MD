const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
///================When editing, do not accidentally delete anything!! MAIN-CONFIG===============================
SESSION_ID: process.env.SESSION_ID || "add season id",  // ADD Your Session Id 
===========================මෙතනට-mongodburl-එකක් ඇඩ්කරගන්න============================================
MONGODB: process.env.MONGODB || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority",
===============================උඩ එකට==================================================================
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
OWNER_REACT: process.env.OWNER_REACT || "true", //add true or false
BOT_NAME: process.env.BOT_NAME || "malvin-v2",
///===============================================DONT-CHANGE-API========================================
GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
///=================When editing, do not accidentally delete anything !!ALIVE-CONFIG===============================
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/gdvaaw.jpg", //add alive img url
ALIVE_MSG: process.env.ALIVE_MSG || "💜✅ HI I AM WHATSAPP BOT ✅💜", //add alive msg
ANTI_LINK: process.env.ANTI_LINK || "true", //add true or false
ANTI_BAD: process.env.ANTI_BAD || "true", //add true or false
};
