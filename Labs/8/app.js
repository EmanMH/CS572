const express = require("express");
const path = require("path");
const mongoClient = require("mongodb").MongoClient;
const client=new mongoClient("mongodb://localhost:27017");

const locations = require("./locations");

let DB = null;

const app = express();

app.use(async (req, res, next) => {
    try {
        if (DB) {
            req.db = DB;
        } else {
            await client.connect();
            DB = client.db('homework07');
            req.db = DB;
        }
        next()
    } catch (error) {
        console.log(error)
    }

})

//db.locations.createIndex({location:1}) create index node command
app
    .use(express.json())
app
    .post("*", (req, res, next)=>{
        try{
            JSON.parse(JSON.stringify(req.body));
            next();
        }
        catch(err){
            res.status(506).send("Invalid JSON body received!");
        }
    })

app.use(locations);
app.get("/", (req, res, next)=>res.redirect("/locations"));

app.listen(8080, ()=>console.log("Listening on 8080."))