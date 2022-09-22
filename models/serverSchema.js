const { Schema, model } = require('mongoose');


const serverSchema = new Schema({
    serverID:{type:String, required: true},
    serverName:{type:String},
    serverDescription: {type:String},
    aproxMemberCount: {type:Number},
    aproxPresenceCount: {type:Number},
    serverChannels:{type:Array},
    channelsRef: [{ type: Schema.Types.ObjectId, ref: 'dcchannels' },{default:null}],
    usersRef: [{ type: Schema.Types.ObjectId, ref: 'dcusers' },{default:null}],
    messagesRef: [{ type: Schema.Types.ObjectId, ref: 'dcmessages' },{default:null}],

    
});

const modelServer = model("dcservers",serverSchema);

module.exports = modelServer