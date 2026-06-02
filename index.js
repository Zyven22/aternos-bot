const mineflayer = require('mineflayer');
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running safely!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Web server listening on port ${PORT}`);
});

function createBot() {
    console.log("Attempting to connect bot to Aternos...");
    
    const bot = mineflayer.createBot({
        host: 'mohipetni.aternos.me',
        port: 57543,
        username: 'AFK_Bot',        
        version: '1.20.4'           
    });

    bot.on('spawn', () => {
        console.log('SUCCESS: Bot joined the server successfully!');
    });

    bot.on('kicked', (reason) => {
        console.log('KICKED BY SERVER. Reason:', reason);
    });

    bot.on('end', () => {
        console.log('Bot disconnected. Reconnecting in 10 seconds...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => {
        console.log('CRITICAL ERROR:', err.message);
    });
}
