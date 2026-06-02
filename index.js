const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'mohipetni.aternos.me', // Change to your Aternos IP (exclude the port)
        port: 57543,                // Change to your Aternos Port number
        username: 'AFK_Bot',        // Name of the bot in-game
        version: false              // Auto-detects Minecraft version
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
