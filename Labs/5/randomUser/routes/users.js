var express = require('express');
var router = express.Router();
const axios =require('axios')
const {from} =require(' rxjs');
const {shareReplay}=rxjs.operators;

var randomUserApi="https://randomuser.me/api/";
/* GET users listing. */
router.get('/', function(req, res, next) {
 let pathStr="?results=";

 var obs$= from(axios.get(randomUserApi+pathStr));

 obs$.subscribe(data=>console.log(data));

  res.send('respond with a resource');
});

module.exports = router;
