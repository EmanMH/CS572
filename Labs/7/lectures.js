const express = require("express");
const router = express.Router();

const path = "/lectures";



router.get(path, async (req, res, next) => {
    const lectures =req.db.collection("lectures");

    let results=await lectures.find().toArray();
    res.json(results);
});

router.get(`${path}/search/:q`,async (req, res, next) => {
    const lectures =req.db.collection("lectures");

    const lecture =await lectures.find({'lecture':{$regex: `.*${req.params.q}.*`}}).toArray();
    if(lecture) res.json(lecture);
    else res.send(404, "Lecture not found!");
});

router.get(`${path}/:id`,async (req, res, next) => {
    const lectures =req.db.collection("lectures");

    const lecture =await lectures.findOne({'_id':req.params.id});
    if(lecture) res.json(lecture);
    else res.send(404, "Lecture not found!");
});

router.post(path,async (req, res, next) => {
    const lectures =req.db.collection("lectures");

    const results=await  lectures.save(req.body);
    res.status(201).end();
});


router.delete(`${path}/:id`,async (req, res, next) => {
    const lectures =req.db.collection("lectures");

    const results =await lectures.remove({'_id': req.params.id});
    if(results){
        res.status(200).end();
    }
    else res.send(404, "Lecture not found!");
});

module.exports = router;