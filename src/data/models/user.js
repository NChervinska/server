const mongoose = require('mongoose'); 
const schema = mongoose.Schema;

const userSchema = new schema({ 
    email: {
        type: String, 
        required: true,
    },
    password: {
        type: String, 
        required: true,
    },
    role: {
        type: String, 
        required: true,
    }
}); 

const user = mongoose.model('User', userSchema); 

module.exports = user;