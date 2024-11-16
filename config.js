const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"8LZLYHHtN19LPX0oV6noragpAzS6TKfCHNXkcQAmEVU="},"public":{"type":"Buffer","data":"Un4eBdLmPNOn80UH18fr3GhfiWmFofAw7OEiT58UpjI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"wK1cdmD85RcnU58n7IO9gm0fgfdmZe8PpdgmTqZFwFU="},"public":{"type":"Buffer","data":"ghAbHUGa2+7Njh2nB2FlN+r+72BX7YIdFh21k21O6wM="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"uINv8FVOZmNCUhWmYx8sjwHf3BKyxqHeu6g1HlBi50I="},"public":{"type":"Buffer","data":"koeKZ73AePF6mD2y4fMTCjw24tJcJeNm1BdmiLuVnAg="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"yBXcxz8wN78nqdIovsvfri8LveseGexmR/PjL6SFtlg="},"public":{"type":"Buffer","data":"Xx0rfvc6+kTuvPF8Dy5HiXAieUGJhw56KxdSNfUMNTs="}},"signature":{"type":"Buffer","data":"nl3c3rL5EauTzPAZHQDRTNx6p/1fpW6WNE3LWAxJHme7B/H8s+GD3vr4IgUtLN2kI7bWSrktRX9HfzfpJp7mhw=="},"keyId":1},"registrationId":246,"advSecretKey":"0w7T49t/tYL6mUWhVfbrFYNQEI7feSnC7fGEJRBh2HQ=","processedHistoryMessages":[{"key":{"remoteJid":"255628470507@s.whatsapp.net","fromMe":true,"id":"C5C68CC5162DD29BA732AB2EB9ADB88A"},"messageTimestamp":1731780686},{"key":{"remoteJid":"255628470507@s.whatsapp.net","fromMe":true,"id":"4BAC92C5242CF20C2567642714EC4B75"},"messageTimestamp":1731780686}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"mYXCRX6UROuSOSBm-wzjRQ","phoneId":"67820b52-0ed2-4921-a65d-06c5d889f77a","identityId":{"type":"Buffer","data":"7HX6zcyIUQHjZLGQQylTI0rHRSM="},"registered":true,"backupToken":{"type":"Buffer","data":"9n5I2mSnxvsY55rhZHWApMXu2VQ="},"registration":{},"pairingCode":"3BDT81PT","me":{"id":"255628470507:32@s.whatsapp.net","lid":"83262504476862:32@lid","name":"🔹제임스 🔹"},"account":{"details":"CJ7E9I8EEMbA47kGGAIgACgA","accountSignatureKey":"clcNR0h4AVDlWVl00uSfp92xsQM2bhZyKSqOj63p5n8=","accountSignature":"V0a+VyaUZoPHAjFdwE2fXadFea78KOmSCWw0CQhJLr/PWpV/iU+kUfqhCcPrZH3Q1J0sMobwCsoeh7an2bRiDg==","deviceSignature":"vy/HeJoPNLaZs/lwJcOzFhd35XtSDUqK8lZZUaYqUEexZzrJ/ZY/qIZcHStLQaRlv0w6zyGpnMNPuuPnXM+7hg=="},"signalIdentities":[{"identifier":{"name":"255628470507:32@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BXJXDUdIeAFQ5VlZdNLkn6fdsbEDNm4Wcikqjo+t6eZ/"}}],"platform":"android","lastAccountSyncTimestamp":1731780682,"myAppStateKeyId":"AAAAAD5W"}",
MONGODB: process.env.MONGODB || "mongodb://mongo:ugUHcTyXvgPmrGpmWtrCwrrWoUSQxDbZ@autorack.proxy.rlwy.net:11616",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "𝙼𝙰𝙻𝚅𝙸𝙽-𝙼𝙳",
BOT_NUMBER: process.env.BOT_NUMBER || "255628470507",
AUTO_AI: process.env.AUTO_AI || "false",
LANG: process.env.LANG || "SI"
};


