const express = require('express');
const router = express.Router();

//Controllers
const serverController = require('../controllers/dcServersController')

module.exports = function(){

//Routes
router.post('/saveServer', serverController.getServerComplet);
router.get('/getAllUsers', serverController.getAllUsersDc);

return router;
}