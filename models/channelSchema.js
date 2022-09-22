const { Schema, model } = require('mongoose');


const channelSchema = new Schema({
    channelID:{type:String, required: true, unique: true},
    channelName:{type:String},
    serverID:{type:String, required: true},
    messagesRef: [{ type: Schema.Types.ObjectId, ref: 'dcmessages' }]
 
});

const modelChannel = model("dcchannel",channelSchema);

module.exports = modelChannel