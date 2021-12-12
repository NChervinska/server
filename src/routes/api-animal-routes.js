const express = require('express');
const {
    getAnimals,
    addAnimal,
    getAnimal, 
    deleteAnimal,
    editAnimal, 
    getStatistics,
    getCheck,
} = require('../data/database');

const router = express.Router();

// Get All Animals
router.get('/api/animals/', getAnimals);
// Add New Animal
router.post('/api/animal/', addAnimal);
// Get Animal by ID
router.get('/api/animal/:id', getAnimal);
// Get Statistic Animal by ID
router.get('/api/animal/statistics/:id', getStatistics);
// Delete Animal by ID
router.delete('/api/animal/:id', deleteAnimal);
// Update Animal by ID
router.put('/api/animal/:id', editAnimal);

// Get Check by ID
router.get('/api/check/:id', getCheck);

module.exports = router;