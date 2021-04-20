require('shelljs/global');

var express = require('express');
var router = express.Router();


router.get('/ping', function(req, res, next) {
  exec('python3 --version');
  res.json({ health: 'healthy'});
});

module.exports = router;
