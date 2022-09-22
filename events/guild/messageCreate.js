require ("dotenv").config();
// const prefix = process.env.PREFIX;

const modelUser = require("../../models/userSchema");
const modelMessage = require("../../models/messageSchema");
const modelServer = require("../../models/serverSchema");
const modelChannel = require("../../models/channelSchema");

const mongoose = require('mongoose');



module.exports = async (client, discord, message) => {

//    client.on("messageCreate", (message) => {
//             // console.log(`messageId: ${message.id}`);
//             // console.log(`authorId: ${message.author.id}`);
//             // console.log(`userName: ${message.author.username}`);
//             // console.log(`guildId: ${message.guildId}`);
//             // console.log(`channelId: ${message.channelId}`);
//             console.log(`contenu: ${message.content}`);
//             // console.log(`mentions: ${message.mentions}`);
//             // console.log(message.count(message.id));

//         })

    //  if( message.author.bot) return;

     // @@@@@@ register user by msg's @@@@@@
     let userData;
     try {
        userData = await modelUser.findOne({userID: message.author.id});
        console.log(userData)
        if(!userData) {
            let user = await modelUser.create({
                userID: message.author.id,
                userName: message.author.username,
                serverID: [message.guildId],
                serverRef: [],
                messagesRef: [], 
            });
            user.save();
        }else {
            console.log("Usuario ya registrado");
        }
    }catch(err){
        console.log(err);
    }
    // const messID = message.id
    
    let messageData;
    try {

        messageData = await modelMessage.findOne({messageID: message.id})
        
        if(!messageData) {
            let msg = await modelMessage.create({
                messageID: message.id,
                messageContent: message.content,
                userID: message.author.id,
                userName: message.author.username,
                serverID: message.guildId,
                channelID: message.channelId,
                timeStamp: message.createdTimestamp,
                mentions: message.mentions,
            })
            // console.log(msg);
            msg.save();
        }
    }catch(err) {
        console.log(err);
    }
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    //  if (!message.content.startsWith(prefix)) return message.reply('Esto no es comando')

    //  const args = message.content.slice(prefix.length).split(/ +/);
    //  const cmd = args.shift().toLocaleLowerCase(); //nos dejaria el array que devolvio split sin el primer argumento

    //  const command = client.commands.get(cmd) || client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
    //  if(command) command.execute(client, message, args, discord);
    //  if(!command) return message.channel.send("Este comando no existe");

};