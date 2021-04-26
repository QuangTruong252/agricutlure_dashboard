const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/login');

router.get('/register', loginController.register);
router.get('/', loginController.index);

module.exports = router;