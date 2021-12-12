const mongoose = require('mongoose'); 
const schema = mongoose.Schema;

const employeeSchema = new schema({
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
    user: {
        type: String,
        required: true,
    },
});

const employee = mongoose.model('Employee', employeeSchema); 

module.exports = employee;