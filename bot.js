const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', assync() => {
    console.log('&{bot.user.username} is online.');
    bot.user.setGame("Getting Constructed!!!");
});

client.on('message', message => {
    if (message.content === 'teston') {
    	message.channel.send('I am alive.');
  	}else if(message.content == 'qwerty'){
        message.reply('Are you on your keyboard?');
    }else if(message.content == 'invite'){
        message.channel.send('Invitatin link is https://discord.gg/crtrH5y');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
