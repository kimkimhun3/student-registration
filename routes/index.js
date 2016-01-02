var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : '',
	database : 'students'
});


		
connection.connect(function(err){
	if(!err) {
		console.log("Index connected to database");  
	} else {
		console.log(err);  
	}
});

router.get('/homepage', function(req, res) {
res.render('homepage');
});

router.get('/registration', function(req, res) {
res.render('registration');
});

router.post('/registration', function(req, res) {

var roll = req.body.roll;
var fn = req.body.fn;
var ln=req.body.ln;
var phone=req.body.phone;
var email=req.body.email;
var degree=req.body.degree;
var branch=req.body.branch;
var college=req.body.college;
var gender=req.body.gender;
var dob=req.body.dob;
var input=JSON.parse(JSON.stringify(req.body));
console.log(input);
var data = {
	     rollNo:roll,
	     gender:gender,
	     first_name:fn,
	     last_name:ln,
	     phone:phone,
	     degree:degree,
	     college:college,
	     branch:branch,
	     email:email,
	     dob:dob
	    };

connection.query("INSERT INTO student SET ?", data, function(err,fields){
	      if (err)
	       { 
	       	  console.log("Error inserting : %s ",err );
              res.send({success: 'fail'});
	        }else{
       res.status(200).send({success: 'ok'});
       }
       var fl=JSON.parse(JSON.stringify(fields));
       console.log(fl);
   });                            //Push the starting link to the queue.

});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/homepage');
});

module.exports = router;