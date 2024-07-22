const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.usernames_get);

router.get('/new', indexController.new_username_get);

router.post('/new', indexController.new_username_post);
module.exports = router;

