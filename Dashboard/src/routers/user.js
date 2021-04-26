const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/user');

router.get('/', userController.index);

module.exports = router;