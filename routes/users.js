const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('usernames will be logged here - wip');
});
router.get('/new')

router.post('/new', (req, res) => {
  res.send("username to be saved: ", req.body.username);
});

module.exports = router;
