
//% models
const userModel = require("../../models/userSchema")
//% models

module.exports = async (client, discord, member) => {
    // console.log(member.user);
    // const channel = member.guild.channels.cache.find((channel) => channel.name !== "otro-canal")

    // channel.send("Hello");
    

    // const guild = member.guild;

    // guild.roles.cache.forEach((role) => {
    //   console.log(`Name: ${role.name} id: ${role.id}`);  
    // })

// user save
console.log(member)
let userData;
try {
   userData = await modelMessage.findOne({userID: member.id});
   if(!userData) {
       let user = await userModel.create({
           userID: member.id,
           userName: member.username,
           serverID: [member.guildId],
           serverRef: [],
           messagesRef: [], 
       });
       user.save();
   }else {
       console.log("User Exist");
   }
}catch(err){
   console.log(err);
}


//% register user


    // const rol = guild.roles.cache.find((role) => role.name === "student");
    // member.roles.add(rol)

}