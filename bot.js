const Discord = require('discord.js');
const sgbot = new Discord.Client({disableEveryone: true});

sgbot.on('ready', async () => {
    console.log('I am ready!');
    bot.user.setGame("Getting Constructed");
});

sgbot.on('message', async message => {
    if (message.content === 'testn') {
    	message.channel.send('I am alive.');  	
    }else if(message.content == 'qwerty'){
        message.reply('Are you on your keyboard?');
    }else if(message.content == 'invite'){
        message.channel.send('Invitatin link is https://discord.gg/crtrH5y');
    }
});

// THIS  MUST  BE  THIS  WAY
sgbot.login(process.env.BOT_TOKEN);
