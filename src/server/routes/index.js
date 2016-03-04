var express = require('express');
var router = express.Router();

var email = [
  'michael.diguiseppi@gmail.com',
  'michael@mherman.org'
];

router.get('/', function(req, res, next) {
  res.render('index', {message: req.flash('message')[0]});
});

router.post('/', validEmail, function(req, res, next) {
  res.render('index', {message: req.flash('message')[0]});
});


// def helpers

function validEmail(req, res, next) {

  /*
  1. not blank
  2. not just an @ symbol
  3. text before @ symbol
  4. valid text after @ symbol
  */

  var email = req.body.email;
  if ( !email.trim() ) {
    req.flash('message', {
      status: 'danger', value: 'Invalid Email.  Please try again.'
    });
    return res.redirect('/');
  }

  if (email === '@') {
    req.flash('message', {
      status: 'danger', value: 'Invalid Email.  Please try again.'
    });
    return res.redirect('/');
  }

  if (email.indexOf('@') === -1) {
    req.flash('message', {
      status: 'danger', value: 'Invalid Email.  Please try again.'
    });
    return res.redirect('/');
  }
  return next();

  // if (email.indexOf(req.body.email) === -1) {
  //   req.flash('message', {
  //     status: 'danger', value: 'Invalid Email.  Please try again.'
  //   });
  //   res.redirect('/');
  // } else {
  //   req.flash('message', {
  //     status: 'success', value: 'Success!  Thank\'s for subscribing.'
  //   });
  //     return next();
  // }
}

module.exports = router;
