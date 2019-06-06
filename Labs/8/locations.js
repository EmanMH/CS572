const express = require("express");
const router = express.Router();

const path = "/locations";



router.get(path, async (req, res, next) => {
    const locations =req.db.collection("locations");

    let results=await locations.find().toArray();
    res.json(results);
});


router.get(`${path}/search/:category/:name?`,async (req, res, next) => {
    let criteria = {'location': {$near: [-91.9665342,41.017654]}, 'Category': req.params.category};
    if(req.params.name) criteria['name'] = {$regex: `.*${req.params.name}.*`};

    const locations =req.db.collection("locations");

    const locationResults =await locations.find(criteria).limit(3).toArray();
    if(locationResults) res.json(locationResults);
    else res.send(404, "location not found!");
});

router.get(`${path}/:id`,async (req, res, next) => {
    const locations =req.db.collection("locations");

    const location =await locations.findOne({'_id':req.params.id});
    if(locations) res.json(locations);
    else res.send(404, "location not found!");
});

router.post(path,async (req, res, next) => {
    const locations =req.db.collection("locations");

    const results=await  locations.save(req.body);
    res.status(201).end();
});


router.delete(`${path}/:id`,async (req, res, next) => {
    const lectures =req.db.collection("locations");

    const results =await lectures.remove({'_id': req.params.id});
    if(results){
        res.status(200).end();
    }
    else res.send(404, "location not found!");
});

module.exports = router;