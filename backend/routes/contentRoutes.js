const express = require('express');
const { addContent, getAllContent } = require('../controllers/contentController');
const router = express.Router();

router.post('/add', addContent);
router.get('/all', getAllContent);

module.exports = router;
