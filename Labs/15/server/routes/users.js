var express = require('express');
const fs = require("fs");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const saltRounds = 10;

let privateKey = fs.readFileSync("private-key.txt", 'utf8');
let publicKey = fs.readFileSync('public-key.txt');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  let user= req.db.collection('users').findOne({'email':req.query.email});
  if(user.length>0)
  res.json(user[0]);
  else  
  res.json({'msg':'not found'});
});

 router.post('/', async function(req, res) {
   console.log(req.body);
  const hash = await bcrypt.hash(req.body.password, saltRounds);
  req.body.password = hash;
  delete req.body.confirmpassword;
  let user= req.db.collection('users').save(req.body);
  res.status(201).end();
});

const authMiddlerWare = (req, res, next) => {
  const token = req.headers['authorization'].split(" ")[1];
  console.log(token);
  jwt.verify(token, publicKey, function (err, decoded) {
      if (err) res.status(401).send();
      console.log(decoded)
      req.userEmail = decoded.email;
      next();
  });
}
router.get("/protected", authMiddlerWare, (req, res, next) => {
  res.json({ success: true });
});

router.post("/login", async (req, res, next) => {
  console.log(req.body.email);
  let user = await req.db.collection('users').findOne({ 'email': req.body.email });
  if (user) {
      const isValid = await bcrypt.compare(req.body.password, user.password);
      if (!isValid) res.json({ success: false });

      var i = 'Eman corp';          // Issuer 
      var s = 'ehassan@mum.edu';        // Subject 
      var a = 'http://eman.in'; // Audience
      var signOptions = {
          issuer: i,
          subject: s,
          audience: a,
          expiresIn: "16h",
          algorithm: "RS256"
      };
      console.log(user);
      console.log(privateKey);
      jwt.sign(user, privateKey, signOptions, function (err, token) {
          console.log(err);
          console.log(token);
          res.json({ success: true, token: token });
      });
  } else {
      res.json({ success: false });
  }

});



module.exports = router;
