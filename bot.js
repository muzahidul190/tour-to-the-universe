const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', async () => {
    console.log('I am ready!');
    bot.user.setGame("Getting Constructed");
});

bot.on('message', async message => {
    if (message.content === 'testn') {
    	message.channel.send('I am alive.');  	
    }else if(message.content == 'qwerty'){
        message.reply('Are you on your keyboard?');
    }else if(message.content == 'invite'){
        message.channel.send('Invitatin link is https://discord.gg/crtrH5y');
    }
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
