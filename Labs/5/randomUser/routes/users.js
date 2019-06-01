var express = require('express');
var router = express.Router();
const axios =require('axios')
const {from} = require("rxjs");
const {shareReplay}= require("rxjs/operators");
const url = require('url');

var randomUserApi="https://randomuser.me/api/";

const getFullUrl = function (req, query) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl,
    query: query
  });
}

/* GET users listing. */
router.get('/', function(req, res, next) {
 let pathStr="?results=";

 var obs$= from(axios.get(randomUserApi+pathStr)).pipe(shareReplay(1));

 obs$.subscribe(data=> res.set('Cache-Control', 'private, max-age=86400').set("Link"
 , `<${getFullUrl(req, {page: parseInt(req.query.page || 0) + 1})}>; rel="next"`)
  .json(data.data));

});

module.exports = router;
