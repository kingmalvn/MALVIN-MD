const axios = require('axios');
const { cmd } = require('../command');
const config = require('../config'); // Ensure your API key is in config

cmd({
    pattern: "movie",
    desc: "Fetch detailed information about a movie.",
    category: "utility",
    react: "🎬",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const movieName = args.join(' ');
        if (!movieName) {
            return reply("📽️ Please provide the name of the movie.");
        }

        const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${config.OMDB_API_KEY}`;
        const response = await axios.get(apiUrl);

        const data = response.data;
        if (data.Response === "False") {
            return reply("🚫 Movie not found.");
        }

        const movieInfo = `
🎬 *Movie Information* 🎬

🎥 *Title:* ${data.Title}
📅 *Year:* ${data.Year}
🌟 *Rated:* ${data.Rated}
📆 *Released:* ${data.Released}
⏳ *Runtime:* ${data.Runtime}
🎭 *Genre:* ${data.Genre}
🎬 *Director:* ${data.Director}
✍️ *Writer:* ${data.Writer}
🎭 *Actors:* ${data.Actors}
📝 *Plot:* ${data.Plot}
🌍 *Language:* ${data.Language}
🇺🇸 *Country:* ${data.Country}
🏆 *Awards:* ${data.Awards}
⭐ *IMDB Rating:* ${data.imdbRating}
🗳️ *IMDB Votes:* ${data.imdbVotes}
`;

        // Define the image URL
        const imageUrl = data.Poster && data.Poster !== 'N/A' ? data.Poster : config.ALIVE_IMG;

        // Send the movie information along with the poster image
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `${movieInfo}\n> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ɴᴇᴛʜᴜ-ᴍᴅ`
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});
