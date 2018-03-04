const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'teston') {
    	message.reply('I am alive.');
  	}else if(message.content == 'qwerty'){
        message.reply('Are you on your keyboard?');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
