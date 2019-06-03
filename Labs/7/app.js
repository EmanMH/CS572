const express = require("express");
const fs = require("fs");
const path = require("path");
const logger = require("morgan")
const cors = require("cors");
const helmet = require("helmet");
const mongoClient = require("mongodb").MongoClient;
const client=new mongoClient("mongodb://localhost:27017");

const grades = require("./lectures");

let DB = null;




const logFileStream = fs.createWriteStream(path.join(__dirname, "access.log"), {encoding: "utf8"});
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


app
    .use(cors())
    .use(logger("common", {stream: logFileStream}))
    .use(helmet())
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

app.use(grades);
app.get("/", (req, res, next)=>res.redirect("/lectures"));

app.listen(8080, ()=>console.log("Listening on 8080."))