var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var years = parseInt(req.query.years);
  var days = years * 365;
  var userName = req.query.userName;
  
  console.log(userName);
   if (!userName) {
    userName = 'Mystery Guest';
  }
  
  
  res.render('index', { title: 'Howdy!', userName: userName, days: days });
});

module.exports = router;
