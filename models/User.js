const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    firstname: {
        required: true,
        type: String,
    },
    lastname: {
        required: true,
        type: String,
        
    },
    email: {
        required: true,
        type: String
        
    }
});


const User = mongoose.model('user',UserSchema);

module.exports = User;