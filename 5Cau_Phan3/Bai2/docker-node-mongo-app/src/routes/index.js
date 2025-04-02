const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Define routes for the REST API
router.post('/data', dataController.createData);
router.get('/data', dataController.getAllData);
router.get('/data/:id', dataController.getDataById);
router.put('/data/:id', dataController.updateData);
router.delete('/data/:id', dataController.deleteData);

module.exports = router;