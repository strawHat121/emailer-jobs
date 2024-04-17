const { Telegraf } = require('telegraf');

require('dotenv').config()

// Your Telegram bot token
const BOT_TOKEN = process.env.BOT_TOKEN

// Initialize the bot
const bot = new Telegraf(BOT_TOKEN);

// Middleware function to intercept forwarded messages
bot.use((ctx, next) => {
    // Check if the message is forwarded
    console.log(ctx.message)

    // Call the next middleware or handler
    return next();
});

// Start the bot
bot.launch();
