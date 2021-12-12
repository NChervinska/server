const express = require('express');
const {
    getActivities,
    addActivity,
    getActivity, 
    deleteActivity,
    editActivity, 
    checkAllAnimal,
} = require('../data/database');

const router = express.Router();

// Get All Activities
router.get('/api/activities/', getActivities);
// Add New Activity
router.post('/api/activity/', addActivity);
// Get Activity by ID
router.get('/api/activity/:id', getActivity);
// Delete Activity by ID
router.delete('/api/activity/:id', deleteActivity);
// Update Activity by ID
router.put('/api/activity/:id', editActivity);

router.get('/api/checkallanimal/', checkAllAnimal);
module.exports = router;