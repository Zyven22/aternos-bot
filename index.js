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
    const bot = mineflayer.createBot({
        host: 'mohipetni.aternos.me', 
        
        port: 57543,                  
        
        username: 'AFK_Bot',        
        version: "1.20.4"              
    });

    bot.on('spawn', () => {
        console.log('Bot joined the server!');
    });

    bot.on('end', () => {
        console.log('Bot disconnected. Reconnecting in 10 seconds...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => {
        console.log('Mineflayer Error encountered:', err.message);
    });
}

createBot();
