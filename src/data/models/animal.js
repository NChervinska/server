const mongoose = require('mongoose'); 
const schema = mongoose.Schema;

const animalSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    }, 
    age: {
        type: Number,
        required: true,
    },
    client: {
        type: String,
        required: true,
    },
    employee: {
        type: String,
        required: true,
    },
}); 

const animal = mongoose.model('Animal', animalSchema); 

module.exports = animal;