const express = require('express');
const router = express.Router();
const genresController = require ('../contollers/genresController');

router.get('/', genresController.getAll);
router.post('/create', genresController.create);
router.get('/detail/:id', genresController.getById);

module.exports = router;