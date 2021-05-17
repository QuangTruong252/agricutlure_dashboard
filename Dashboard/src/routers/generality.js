const express = require('express');
const router = express.Router();

const generalityController = require('../app/controllers/generality');

router.get('/history', generalityController.showHistory);
router.get('/', generalityController.index);

module.exports = router;