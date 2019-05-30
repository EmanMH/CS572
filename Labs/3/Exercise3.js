const fs=require('fs');
const http=require('http');
const {Subject}=require('rxjs');
const path=require('path');

var server= http.createServer().listen("8090");
var pathfile=path.join(__dirname,"/big.file");
var subject=new Subject();

subject.subscribe(
(ctx)=>{ if(ctx.req.url !='/async' && ctx.req.url != '/stream')
{
console.log(ctx.req.url);
    var file=fs.readFileSync(pathfile);
}
else if(ctx.req.url =='/async')
{
    var file=fs.readFile(pathfile, (err, data) => {
        if (err) throw err;
        console.log(data);
      });

}
else if (ctx.req.url=='/stream')
{
    const stream = fs.createReadStream(pathfile);
}
}
)

server.on('request',function (req,res) {
    subject.next( {req,res});
})
