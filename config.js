const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {EC1l1RKZ#iIk20jIp2r7-3tmLs0h2qfqTCnPfenAgsis_CVXc-3w
SESSION_ID: process.env.SESSION_ID || "EC1l1RKZ#iIk20jIp2r7-3tmLs0h2qfqTCnPfenAgsis_CVXc-3w",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/n5vvij.jpg",
SUDO_NB: process.env.SUDO_NB || "2347067067176",
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: "true"
};
