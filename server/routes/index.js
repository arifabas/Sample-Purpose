var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  
  console.log('=======');
  console.log(req.body);
  res.status(200).json({status: 'Oke'});

})

module.exports = router;
