const mongoose = require('mongoose'); 
const schema = mongoose.Schema;

const activitySchema = new schema({ 
        sleepHour: {
            type: Number, 
            required: true,
        }, 
        activeHour: {
            type: Number, 
            required: true,
        }, 
        animal: {
            type: String,
            required: true
        }, 
        date: {
            type: Number, 
            required: true,
        }
    },
); 


const activity = mongoose.model('Activity', activitySchema); 

module.exports = activity;