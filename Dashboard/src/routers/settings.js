const express = require('express');
const router = express.Router();

const settingsController = require('../app/controllers/settings');

router.get('/', settingsController.index);

module.exports = router;