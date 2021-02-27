var express = require('express');
var router = express.Router();

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});




var user =[
  {
    email: 'abcd@gmail.com' ,password:'password'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('welcome to the backend server');
});

router.post('/login',function(req,res){
  let result = user.find(user=> user.email == req.body.email);
  if(result){
    if(result.password==req.body.password){
      res.status(200).send( {
        message:"successful login"
    })

    }else {
      res.status(200).send( {
        message: "password incorrect"
      })
    }
  }else {
    res.status(200).send( {
      message: "user not found"
    })
  }
});



module.exports = router;
