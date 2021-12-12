const express = require('express');
const {
    getUsers,
    addUser,
    getUser, 
    deleteUser,
    editUser,
} = require('../data/database');

const router = express.Router();

// Get All Users
router.get('/api/users/', getUsers);
// Add New User
router.post('/api/user/', addUser);
// Get User by ID
router.get('/api/user/:id', getUser);
// Delete User by ID
router.delete('/api/user/:id', deleteUser);
// Update User by ID
router.put('/api/user/:id', editUser);

module.exports = router;