var express = require('express');
var router = express.Router();

var MongoClient =
   require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url =
   'mongodb://localhost:27017/books';

router.get('/', function(req, res, next) {
  var subj = req.query.subj;
  MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  var cursor;
  if (subj) {
    cursor = db.collection('volumes').find({subject: subj});
  } else {
    cursor = db.collection('volumes').find();
  }
  cursor.toArray(function(err, docs) {
    assert.equal(null, err);
    db.close();
    res.render('booklist', {"title": "Book List", "items": docs});
  }); 
});
});

module.exports = router;


