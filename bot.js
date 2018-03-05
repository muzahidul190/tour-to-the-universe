const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', async () => {
    console.log('I am ready!');
    bot.user.setGame("Getting Constructed");
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if (cmd === 'vorn') {
        return message.channel.send('I am alive.');  	
    }else if(cmd == 'qwerty'){
        return message.reply('Are you on your keyboard?');
    }else if(cmd == 'invite'){
        return message.channel.send('Invitatin link is https://discord.gg/crtrH5y');
    }else if(cmd == 'ild'){
        bot.user.setGame('Getting Constructed.');
    }
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
