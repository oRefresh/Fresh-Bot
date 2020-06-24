const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '>'

bot.on('ready', read=>{
    console.log('its up')
})

bot.on('message', message => {
 let args = message.content.substring(prefix.length).split(" ");
 switch(args[0]){
     case 'ping':
     message.channel.send('pong!');
     break;
     case 'portfolio':
     message.channel.send('https://orefresh.io')
     break;
     case 'purge':
         if(!args[1]) return message.reply('Invalid Statement')
         message.channel.bulkDelete(args[1]);
         break;
    case 'hotel':
    message.channel.send('Trivago')
    break;
    case 'infome':
        const embed = new Discord.MessageEmbed()
        .setColor(0xFFF933)
        .setTitle('User Info')
        .addField('Player Name', message.author.username)
        .addField(reply.author.displayavatar)
        message.channel.send(embed)
        break;
    case 'nigger':
    message.channel.send('your a fucking nigger bryan')
    break;
        
 }
});

bot.login('NzIzODE1NTE2NDgwODY0MzA3.Xu3e7w.1djrFJ6-IfEycB_W0aZ754mXfjE');