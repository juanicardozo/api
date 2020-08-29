const express = require('express');
const router = express.Router();
const actorsController = require ('../controllers/actorsController');

router.get('/', actorsController.getAll);
router.post('/create', actorsController.create);
router.get('/detail/:id', actorsController.getById);

module.exports = router;