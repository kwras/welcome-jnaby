  const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as Efecct. ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '484154163232768001') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '504006929664835607').send('**Welcome To Effect.**');
},3000);
});


client.on('ready', () => {
  console.log(`Logged in as Efecct. ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '484154163232768001') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '504006929664835607').send('**Welcome To Effect..**');
},3000);
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
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

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '505503857208459264') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '505526727108198411').send('**Welcome To Stúnning  . **');
},3000);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '501419525661786122') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '501420247392190465').send('You`re In  **Energy**  Welcome ..');
},3000);
});


client.login(process.env.BOT_TOKEN);
