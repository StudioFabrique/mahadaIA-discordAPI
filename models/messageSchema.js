const { Schema, model } = require('mongoose');


const messagesSchema = new Schema({
    messageID:{type:String, required: true, unique: true},
    messageContent:{type:String,},
    userID: {type:String, required: true},
    userName: {type:String, required: true},
    serverID: {type:String},
    channelID: {type:String, required: true},
    timeStamp:{type:Date, required: true},
    mentions:{type:Array,},
});

const modelMessage = model("dcmessages",messagesSchema);

module.exports = modelMessage