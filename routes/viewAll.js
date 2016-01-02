var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* GET students listing. */


var connection = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : '',
	database : 'students'
});


		
connection.connect(function(err){
	if(!err) {
		console.log("ViewAll connected to database");  
	} else {
		console.log(err);  
	}
});


router.get('/', function(req, res, next) {


    console.log("i am here");
	connection.query("select * from student",function(err,fields){
	      if (err)
	       	  console.log("Error selecting : %s ",err );
	       
	       console.log(JSON.parse(JSON.stringify(fields))); 
          
          res.render('viewall',{data:fields});
       //res.status(200).send({success: 'ok'});
       
   });  
   //res.send("hello");
});

module.exports = router;
