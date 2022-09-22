const client = require('discord.js');
const fetch = require('node-fetch');
require ("dotenv").config();
const userModel = require("../../models/userSchema")
const messageModel = require("../../models/messageSchema")
const mongoose = require('mongoose');



module.exports = async (client, discord, message) => {
    console.log(`El bot: ${client.user.username} esta en linea`);
    

      // const view = await <guild>.members.fetch()
      // const usuario = message.author;
      // const miembro = message.member;

      //################# estados de usuarios #######################

      //  const guild =   await client.guilds.fetch('951838732275830794')
      // console.log(guild);
      // const presencesCache = await guild.presences
      //  console.log(presencesCache);
      // const total = await guild.members.cache.map(x => x.presence)
      // guild.members.cache.map(x => x.presence).filter(pre => pre != null)
       //const  presencesMap = presencesCache.map(u => `userId: ${u.userId} --name:${u.member.user.username} -- estado ${u.status} --- act ${u.activities}`)
      //  console.log(total)
      
      
      
      // --------------- lista de miembros mas sus id --------------------------

        //  const guild =   await client.guilds.fetch('951838732275830794')/*.then(response => response.json());*/
        //  const members =  await guild.members.fetch({user:['961374461045661776', '724408829953179678'], withPresences: true}).then((data)=> {
        //    console.log(data);
        //  })
         
          // console.log(members);
        // const memberMaps = members.map(u =>  `name:${u.user.username}--id:${u.user.id}--status: ${u.guild.presences.status} `).join("\n");
        // console.log(memberMaps);
    // -------------------------- lista de miembros mas sus id end -------------------------------

    //   const obtenerUsuario = async() => {
    //     try {
    //         const resp = await client.guild.fetch('951838732275830794')
    //         const data = await resp.json()
    //         console.log(data);
    
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    // obtenerUsuario();
  
//    const obtenerUsuario = async() => {
//     try {
//         const resp = await fetch(`https://discord.com/api/users/285025914138394626`, {
//           headers: {
//             authorization: `Bot ${process.env.DSTOKEN}`,
//            },
//          })
//         const data = await resp.json()
//         console.log(data);

//     }catch(err){
//         console.log(err);
//     }
// }
// obtenerUsuario();


  //  const serv = await client.guilds.get("951838732275830794")
  //  console.log(serv);

      
      //   // const users =  await guild.members.user.fetch()
    //   // const user =  await guild.members.users.username.fetch()
      
    //   console.log(members);

  // #################### canales y sus id #####################

  //   const guild =  await client.guilds.fetch('951838732275830794')
  //  const chann = await guild.channels.fetch()
  // //  const cont = await chanMe.content.fetch()
  // const channMap = chann.map(g => `name:${g.name} -- id:${g.id}`).join("\n");


  //  console.log(channMap);

  //  ######################## canales y sus id #####################


  // ########### Mensajes por utilisador ########################
  // const guild =  await client.guilds.fetch('951838732275830794')
  // const chan =  await guild.channels.fetch('951838732816891936')  
  // const mes =  await chan.message.fetch()
  // console.log(mes);
  // const mess = await mes.map(user => user.id === "724408829953179678")
  // console.log(mess);
  //  const tags  =  client.users.fetch(u =>  `${u.username}#${u.discriminator}`);
  //  console.log(tags);
  
  // const guild =  await client.guilds.fetch('951838732275830794')
  // const channels =  await client.channels.fetch('951838732816891936')
  // // console.log(channels);
  // const messages =  await channels.messages.fetch()
  // // console.log(messages.length());
  // // const mapear = await messages.map(m => m.id)
  // // let box = [];
  // var query = messageModel.find({userNamed:'francisco tamayo'})
  // // let messageD =  messageModel.find({messageID: message.id}).limit(10);
  // console.count(query)//   
  // console.log(query);
  
  
  // messages.forEach((message) => {

//     messageD = messageModel.find().limit(10);

//     try{
//       // console.log(messageD.length);
//       console.count(messageD)
//         if(!messageD) {
//             let mensaje =  messageModel.create({
//                 messageID: message.id,
//                 messageContent: message.content,
//                 userID: message.author.id,
//                 userName: message.author.username,
//                 serverID: message.guildId,
//                 channelID: message.channelId,
//                 timeStamp: message.createdTimestamp,
//                 editedTimeStamp: message.editedTimestamp,
//             })
//             console.log('mensajes guardados');
//             mensaje.save();
//           }
//     }catch(err) {
//         console.log(err);
//     }
  
// });



















      // console.log(message.id);
      // console.log(message.content);
      // console.log(message.author.id);
      // console.log(message.author.username);
      // console.log(message.guildId);
      // console.log(message.channelId);
      // console.log(message.createdTimestamp);
      // console.log(message.editedTimestamp);
      // console.log('-----------------------');
  



  //   try{
  //     messageD =  messageModel.findOne({messageID: message.id})
  //       if(!messageD) {
  //           let mensaje =  messageModel.create({
  //               messageID: message.id,
  //               messageContent: message.content,
  //               userID: message.author.id,
  //               userName: message.author.username,
  //               serverID: message.guildId,
  //               channelID: message.channelId,
  //               timeStamp: message.createdTimestamp,
  //               editedTimeStamp: message.editedTimestamp,
  //           })
  //           mensaje.save();
  //           console.log('mensajes guardados');
  //       }
  //   }catch(err) {
  //       console.log(err);
  //   }
  // });

 

  // const mess = await messages.map(m => m.content)
  // console.log(mess);

// ############# mensajes por server ##################

// const guild = await client.guilds.fetch("951838732275830794")
// const total = await  guild.channels.fetch()
// //console.log(total);
// //console.log(total);
// const mensajes = await total.forEach(c => c.messages.get())


// const guild =  client.guilds.cache.get("951838732275830794").channels.fetch()
// const mensajes =  guild.forEach( c =>  c.messages.fetch())
// console.log(mensajes);
//const messCache = await server.message.fetch()
//console.log(mensajes);


//############ test cache mensajes por channels ################

//const cach = await client.channels.cache.get("960546465086849035").messages.fetch()
//console.log(cach);

//####### mensajes por utilizador en channel #######

//const cach = await client.channels.cache.get("960546465086849035")
//const messfe = await cach.messages.fetch()
//const filter = await messfe.filter(u => u.author.discriminator === '6088')
//console.log(filter);
// client.on("messageCreate", (message) => {
//   console.log(`messageId: ${message.id}`);
//   console.log(`authorId: ${message.author.id}`);
//   console.log(`userName: ${message.author.username}`);
//   console.log(`guildId: ${message.guildId}`);
//   console.log(`channelId: ${message.channelId}`);
//   console.log(`contenu: ${message.content}`);
//   console.log(`mentions: ${message.mentions}`);

// })

}
