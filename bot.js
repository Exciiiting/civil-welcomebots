const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '478680714452140055') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '510839186652266516').send(' **Welcome to Server Civil .. ♧ **');
},3000);
});
  

client.login(process.env.BOT_TOKEN);