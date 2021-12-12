const express = require('express');
const {
    getClients,
    addClient,
    getClient, 
    deleteClient,
    editClient, 
} = require('../data/database');

const router = express.Router();

// Get All Clients
router.get('/api/clients/', getClients);
// Add New Client
router.post('/api/client/', addClient);
// Get Client by ID
router.get('/api/client/:id', getClient);
// Delete Client by ID
router.delete('/api/client/:id', deleteClient);
// Update Client by ID
router.put('/api/client/:id', editClient);

module.exports = router;