const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '501419525661786122') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '509751878607962132').send('You`re In  **Energy**  Welcome ..');
},6000);
});






client.on('ready', () => {
  console.log(`Logged in as Energy ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '497797549118193684') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '503653288999125012').send('**Welcome to Sùgar.** ');
},3000);
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '462347265747451914') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '492406462476451840').send('**Welcome to Bubbles Tumblr**');
},3000);
});




client.login(process.env.BOT_TOKEN);
