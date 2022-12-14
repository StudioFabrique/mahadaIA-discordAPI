const fetch = require('node-fetch')
const modelUser = require("../models/userSchema");
const modelMessage = require("../models/messageSchema");
const modelServer = require("../models/serverSchema");
const modelChannel = require("../models/channelSchema");



// const guild = '951838732275830794' // ID SERVER TESTS
exports.getServerComplet = async (req, res, next) => {

    const guild = req.body.guild;
    const serverInMongo = await modelServer.findOne({ serverID: guild });


        if (!serverInMongo) {
            
            //    //*################################### FETCH ALL DATA ###########################
        //         //!FETCH USERS
        const usersFetch = await fetch(`https://discord.com/api/guilds/${guild}/members?limit=100`, {
            headers: {
                'Authorization': `Bot ${process.env.DSTOKEN}`
            }
        })
        const usersData = await usersFetch.json();

        //          //!FETCH CHANNELS
        const channelsFetch = await fetch(`https://discord.com/api/guilds/${guild}/channels`, {
            headers: {
                'Authorization': `Bot ${process.env.DSTOKEN}`
            }
        })
        const channelsData = await channelsFetch.json();

        //  //!FETCH SERVER
        const serverFetch = await fetch(`https://discord.com/api/guilds/${guild}?with_counts=true`, {
            headers: {
                'Authorization': `Bot ${process.env.DSTOKEN}`
            }
        })
        const serverData = await serverFetch.json()

        //######################################### END FETCH ############################################

         // //** ================= recovery of messages for each channel of the server =======================
        let messagesDc = [];
        let messagesBd;
        let channelTest = "951838732816891936";
        let urls = channelsData.map(channel => `https://discord.com/api/channels/${channel.id}/messages?limit=100`);

         // use map() to perform a fetch and handle the response for each url
        Promise.all(urls.map(url => fetch(url, { headers: {'Authorization': `Bot ${process.env.DSTOKEN}`}
            })
            .then(response => response.json())))
            .then(array => { array.map(arrays => arrays.forEach(m => {

                    const author = m.author

                    let message = {
                        messageID: m.id,
                        messageContent: m.content,
                        userID: author.id,
                        userName: author.username,
                        serverID: guild,
                        channelID: m.channel_id,
                        timeStamp: m.timestamp,
                        mentions: m.mentions,
                    }
                    messagesDc.push(message);
                })
            )
            modelMessage.insertMany(messagesDc);
            })

                 //  ================ ==recovery of messages END ==============================

                 // *################# CREATION CHANNELS, USERS & SERVER ARRAY #########################
        //         //! CHANNEL ARRAYS

                let channelsArray = [];
                const channelsIds = await channelsData.map(c => c.id)
                await channelsData.forEach(c => {

                    let channel = {
                        channelID: c.id,
                        channelName: c.name,
                        serverID: guild,
                        messagesRef: [],
                    }
                    channelsArray.push(channel);
                })

               await modelChannel.insertMany(channelsArray);


                 // CHANNEL ARRAY END

        //         //! USERS ARRAYS

                let usersArray = []
                await usersData.forEach(u => {

                    let user = {
                        userID: u.user.id,
                        userName: u.user.username,
                        avatar: `https://cdn.discordapp.com/avatars/${u.user.id}/${u.user.avatar}.png`,
                        serverID: [guild],
                        serverRef: [],
                        messagesRef: []
                    }

                    usersArray.push(user);
                })

               await modelUser.insertMany(usersArray);

                 // !SAVE A SERVER
                 // ###########################################################

                let server = await modelServer.create({
                    serverID: serverData.id,
                    serverName: serverData.name,
                    serverDescription: serverData.description,
                    aproxMemberCount: serverData.approximate_member_count,
                    aproxPresenceCount: serverData.approximate_presence_count,
                    serverChannels: channelsIds,
                    channelsRef: [],
                    usersRef: [],
                    messagesRef: [],
                });
                await server.save();

                res.send("server saved");

        }else {
            res.send("Server exist")
        }     
}


exports.updateServerRefs = async (req, res, next) => {


}

exports.getAllUsersDc = async (req, res, next) => {

   const usersDc = await modelUser.find()

    res.send(usersDc)
}



exports.getDcUser = async ( req, res, next ) => {

    const etu = req.params;
    
    try {
        const usersDc = await modelUser.findById(etu);
        res.json(usersDc);
        
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getMessagesById = async ( req, res, next ) => {

    const etu = req.params;
    console.log(req.params)
    
    try {
        const messagesDc = await modelMessage.find(etu);
        res.json(messagesDc);
        
    } catch (error) {
        next();
        console.log(error);
    }
}

exports.getAvatar = async ( req, res, next ) => {

   let avatars;
    
    try {
        const userAvatar = await fetch(`https://cdn.discordapp.com/avatars/724408829953179678/0731209b004e1516d11b18fca3bd8a1d.JPEG,`, {
            headers: {
                'Authorization': `Bot ${process.env.DSTOKEN}`
            }
        })
        // const avatars = await userAvatar.json();

        res.json(userAvatar);
        
    } catch (error) {
        next();
        console.log(error);
    }
}



