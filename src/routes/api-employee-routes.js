const express = require('express');
const {
    getEmployees,
    addEmployee,
    getEmployee, 
    deleteEmployee,
    editEmployee,
} = require('../data/database');

const router = express.Router();

// Get All Employees
router.get('/api/employees/', getEmployees);
// Add New Employee
router.post('/api/employee/', addEmployee);
// Get Employee by ID
router.get('/api/employee/:id', getEmployee);
// Delete Employee by ID
router.delete('/api/employee/:id', deleteEmployee);
// Update Employee by ID
router.put('/api/employee/:id', editEmployee);

module.exports = router;