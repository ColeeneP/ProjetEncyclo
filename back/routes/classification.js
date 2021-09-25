const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const classificationCtrl = require('../controllers/classification');

router.post('/createClassification', auth, classificationCtrl.createClassification);
router.get('/getOneClassification/:id', auth, classificationCtrl.getOneClassification);
router.put('/modifyClassification/:id', auth, classificationCtrl.modifyClassification);

module.exports = router;