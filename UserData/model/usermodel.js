/**
 * New node file
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
	"username" : String,  
    "email" : String});

mongoose.model('user', user);

mongoose.connect('mongodb://localhost/nodeData');
