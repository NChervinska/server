const mongoose = require('mongoose'); 
const schema = mongoose.Schema;

const mealPlanSchema = new schema({
    amountOfFoodOnDay: {
        type: Number, 
        required: true,
    }, 
    animal: {
        type: String,
        required: true,
    },
}); 

const mealPlan = mongoose.model('MealPlan', mealPlanSchema); 

module.exports = mealPlan;