const express = require('express');
const router = express.Router();

const analyticsController = require('../app/controllers/analytics');

router.get('/',analyticsController.index);

module.exports = router;