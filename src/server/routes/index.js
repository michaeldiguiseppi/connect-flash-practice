var express = require('express');
var router = express.Router();

var email = [
  'michael.diguiseppi@gmail.com',
  'michael@mherman.org'
];

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', validEmail, function(req, res, next) {
  res.render('index');
});


// def helpers

function validEmail(req, res, next) {
  if (email.indexOf(req.body.email) === -1) {
    res.send('you fucked up');
  } else {
      return next();
  }
}

module.exports = router;
