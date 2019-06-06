const MongoClient=require('mongodb').MongoClient;
const client=new MongoClient("mongodb://localhost:27017");

client.connect(function (err) {
const db=client.db('homework07');
const col=db.collection("locations");
col.findOne({},{projection:{'_id':0}},function (err,doc){
console.log(doc);
client.close();
});
console.dir("done");
});