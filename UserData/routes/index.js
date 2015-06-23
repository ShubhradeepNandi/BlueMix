var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var user = mongoose.model( 'user' );
//new user({
//	"username" : "sam1",
//	"email" : "sam@email.com"
//}).save();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





router.get('/userlist', function(req, res) {
	//var user = mongoose.model( 'user' );
	  //var db = req.db;
	  //var collection = db.get('usercollection');
	  user.find({},{},function(e,docs){
		  console.log(docs);
		  //console.log(e);
	        res.render('userlist', {
	            "userlist" : docs
	        });
	    });
	});

module.exports = router;
