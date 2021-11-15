const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const predictController = require('../app/controllers/predict');

router.get('/',verifyToken, predictController.getPredict);
router.post('/',verifyToken, predictController.predictData);

module.exports = router;
