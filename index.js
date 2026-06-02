const mineflayer = require('mineflayer');
const http = require('http');

// 1. Create a fake web page so Render stays happy
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running safely!\n');
});

// Render automatically assigns a PORT variable, or defaults to 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Web server listening on port ${PORT}`);
});

// 2. Your actual Minecraft Bot logic
function createBot() {
    const bot = mineflayer.createBot({
        host: 'mohipetni.aternos.me', // Your Aternos IP (exclude the port)
        port: 57543,                // Your Aternos Port number
        username: 'AFK_Bot',        // Name of the bot in-game
        version: 26.1.2              // Auto-detects Minecraft version
    });

    bot.on('spawn', () => {
        console.log('Bot joined the server!');
    });

    bot.on('end', () => {
        console.log('Bot disconnected. Reconnecting in 10 seconds...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log('Error:', err));
}

createBot();
