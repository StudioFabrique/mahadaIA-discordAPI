const { Schema, model } = require('mongoose');


const usersSchema = new Schema({
    userID: {type:String},
    userName: {type:String},
    avatar: {type:String },
    serverID: {type:Array },
    serverRef: [{ type: Schema.Types.ObjectId, ref: 'dcServers' }],
    messagesRef: [{ type: Schema.Types.ObjectId, ref: 'dcmessages' }]

    
});

const modelUser = model("dcusers",usersSchema);

module.exports = modelUser;