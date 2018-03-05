const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', async () => {
    console.log('I am ready!');
    bot.user.setActivity("Getting Constructed", {type: "WATCHING"});
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm"){
        return message.reply('Don\'t DM me now. I\'m still a kid :cold_sweat:');
    }
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if (cmd === 'frn') {
        return message.channel.sendMessage('I am alive.');  	
    }
    if(cmd == 'qwerty'){
        return message.reply('Are you on your keyboard?');
    }
    if(cmd === 'bname'){
        return message.channel.send('My name is');
    }
    if(cmd == 'invite'){
        return message.channel.send('Invitatin link is https://discord.gg/crtrH5y');
    }
    if(cmd === 'botinfo'){
        let info = new Discord.RichEmbed()
       .setDescription("Still Getting Constructed.")
       .setColor("#ffa500")
       .setField("Bot Name: ", bot.username);
        return message.channel.send(info);
    }
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
