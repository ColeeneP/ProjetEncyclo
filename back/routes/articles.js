const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const articleCtrl = require('../controllers/articles');

router.post('/createArticle', auth, multer, articleCtrl.createArticle);
router.get('/getAllArticles', auth, articleCtrl.getAllArticles);
router.get('/getOneArticles/:id', auth, articleCtrl.getOneArticle);
router.put('/modifyArticle/:id', auth, multer, articleCtrl.modifyArticle);
router.delete('/deleteArticle/:id', auth, articleCtrl.deleteArticle);

module.exports = router;