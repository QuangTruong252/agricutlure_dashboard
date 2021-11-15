const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/authUser');
const verifyToken = require('../middleware/auth');

// @desc Check user
router.get('/',verifyToken, authController.authCheck);

// @route POST /api/auth/register /api/auth/login
// @desc Register user and Login user
// @access Public
router.post('/login', authController.authLogin);
router.post('/register', authController.authRegister);

module.exports = router;