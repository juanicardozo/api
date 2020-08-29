const express = require('express');
const router = express.Router();
const moviesController = require ('../controllers/moviesController');

router.get('/', moviesController.getAll);
router.post('/create', moviesController.create);
router.get('/detail/:id', moviesController.getById);

module.exports = router;