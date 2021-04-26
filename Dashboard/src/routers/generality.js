const express = require('express');
const router = express.Router();

const generalityController = require('../app/controllers/generality');

router.get('/',generalityController.index);

module.exports = router;