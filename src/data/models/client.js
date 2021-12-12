const mongoose = require('mongoose'); 
const schema = mongoose.Schema;

const clientSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    bonuses: {
        type: Number,
        default: 0,
    },
    user: {
        type: String,
        required: true,
    },
}); 

const client = mongoose.model('Client', clientSchema); 

module.exports = client;