const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const userController = require('../app/controllers/user');

router.put('/update',verifyToken, userController.updateUserInformation);

module.exports = router;
