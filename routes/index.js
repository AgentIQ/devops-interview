var express = require('express');
var router = express.Router();
const shell = require('shelljs');

router.get('/ping', function(req, res, next) {
  shell.exe('python3 --version');
  res.json({ health: 'healthy'});
});

module.exports = router;
