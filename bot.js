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
    
    if (cmd === 'fhrn') {
        return message.channel.send('I am alive.');  	
    }
    if(cmd == 'qwerty'){
        return message.reply('Are you on your keyboard?');
    }
    if(cmd == 'invite'){
        return message.channel.send('Invitatin link is https://discord.gg/crtrH5y');
    }
    if(cmd === 'botinfo'){
        let info = new Discord.RichEmbed()
       .setDescription("Still Getting Constructed.")
       .setColor("#ffa500")
       .setField("Bot Name: ", bot.user.username);
        return message.channel.send('info');
    }
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
