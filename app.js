const express = require('express');
const { dbConnection } = require('./db/config');
const cors = require('cors');
const routes = require('./routes/routes');
const path = require('path')
const publicPath = path.resolve(__dirname, 'public')
const fetch = require('node-fetch')

require('dotenv').config();


//DiscordJS
const discord = require('discord.js');
const client = new discord.Client({
    intents:["GUILDS", "GUILD_MESSAGES","GUILD_MEMBERS","GUILD_PRESENCES"],
});

//##########Express###############

const app = express();
app.use( express.json());
app.use( cors() );
app.use( express.urlencoded({extended:true}));
app.use(express.static(publicPath));
app.use('/', routes());
//################ MONGO ################

dbConnection();

app.listen(process.env.PORT, () => {
    console.log(`server on port ${ process.env.PORT }`)
});


// ======EVENS HANDLERS

client.commands = new discord.Collection();
client.events = new discord.Collection();

["commandHandler", "eventHandler"].forEach((file) => {
    require(`./handlers/${file}`)(client, discord);
});

//###########login bot#############
client.login(process.env.DSTOKEN);
























































// SLASH COMMANDS 

// let Scomand = [
//     {
//         name: "ping2",
//         description: "Contesta el ping del usuario",
//         run: async(client, interaction, args) => {
//             await interaction.followUp({content: ` Ping: ${client.ws.ping} ms`})
//         }
//     }
// ]

// client.slash = new discord.Collection();

//  client.once('ready',  async ()=> {
  

  
    //console.log(canales);
//     console.log("############################################################################################");
//     console.log(`Bot: ${client.user.username}`);
//     client.user.setStatus('online');
//     client.user.setActivity("Agent #117", {type: 'WATCHING'});
//     console.log("############################################################################################\n\n");
//     console.log("################################   CONSOLE LOGS       ######################################");

    // client.slash.set(Scomand[0].name, Scomand[0]);
    {/* // client.slash.set(Scomand[1].name, Scomand[1]); */}

// await client.application.commands.set(Scomand);



//  })

// client.on("interactionCreate", async (interaction) => {
//     if (interaction.isCommand()) {
//         await interaction.deferReply({ ephemeral : false }).catch((obj) => {
//             // console.log(obj);
//         })
//         console.log(client.slash.get(interaction.commandName));

//         const command = client.slash.get(interaction.commandName);

//         if(!command) return interaction.followUp({ content : "Comando no registrado" })

//         // const args = [];
//        try {
//            command.run(client, interaction )
//        }catch (error) {
//            console.log(error);
//        }

//     }
// })


// client.on("messageCreate", (msg) => {
//     console.log(msg);
// })



//     if(msg.content.startsWith(prefix)) {

//         // return msg.reply(`Este es un comando del prefijo ${prefix}`);
    
//         //estructura de un comando de prefijo
//         //?borrar 99 === prefijo/comando/ argumentos
    
//         const argumentos = msg.content.slice(prefix.length).split(/ +/);
//         const comando = argumentos.shift().toLocaleLowerCase(); //nos dejaria el array que devolvio split sin el primer argumento

       


//         if (comando == "ping") return msg.reply('pong');
//         if(comando == "suma") {
//             return msg.reply(`El resultado es: ${parseFloat(argumentos[0]) + parseFloat(argumentos[1])}`)
//     }
// }



// });
// }






//-------














// client.on("apiRequest" , () => {
//    client.fetchGuildPreview()
//     .then(result => result.json())
//     .then(response => {
//         console.log(response);
//     }).catch  = (err) => {
//         console.log(err);
//     }
// })





// const obtener = async() => {
//     try {
//         const resp = await fetch(`https://discord.com/api/guilds/951838732275830794/channels`, {
//             headers: {
//                 'Authorization': `Bot ${process.env.DSTOKEN}`
//             }
//         })
//         const data = await resp.json()
//         console.log(data);

//     }catch(err){
//         console.log(err);
//     }
// }
// obtenerUsuario();


