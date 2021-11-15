const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const dataController = require('../app/controllers/general');

router.get('/',verifyToken, dataController.getAllGeneral);
router.post('/',verifyToken, dataController.createGeneral);

module.exports = router;
