const express = require('express');
const {
    getMealPlans,
    addMealPlan,
    addMealPlanByActivity,
    getMealPlan, 
    deleteMealPlan,
    editMealPlan,
} = require('../data/database');

const router = express.Router();

// Get All MealPlans
router.get('/api/mealplans/', getMealPlans);
// Add New MealPlan
router.post('/api/mealplan/', addMealPlan); 
//Add meal plan for one animal
router.post('/api/mealplan/:id', addMealPlanByActivity)
// Get MealPlan by ID
router.get('/api/mealplan/:id', getMealPlan);
// Delete MealPlan by ID
router.delete('/api/mealplan/:id', deleteMealPlan);
// Update MealPlan by ID
router.put('/api/mealplan/:id', editMealPlan);

module.exports = router;