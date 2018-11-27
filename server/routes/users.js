var express = require('express');
var router = express.Router();

const { sign_up } = require('../controllers/users_controller');

router.get('/', function(req, res, next) {
  res.send('Respond with a resource');
});

router.post('/sign_up', sign_up)

module.exports = router;
