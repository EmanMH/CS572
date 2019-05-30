const {Subject}=require('rxjs');
const path=require('path');
const url=require('url');
const http = require('http');
const { fork } = require('child_process');

const pid = process.pid;

const server = http.createServer((req, res) => {
    subject.next( {req,res});
    });

var subject=new Subject();

subject.subscribe(
    (ctx)=>{
        if(ctx.req.url.indexOf("filename")>=0)
        {
        const pathFile=path.join(__dirname,ctx.req.url);
        const myurl=url.parse(pathFile,true);
        const childProcess = fork('readFile.js');
        childProcess.send(myurl.query.filename);
        childProcess.on('message', (chnx) => {
            if(chnx=="end")
            ctx.res.end(`Done`+JSON.stringify(chnx));
            else
            ctx.res.write(`Chunk`+JSON.stringify(chnx));
    })
    }
}
);

  server.listen(8090,()=> console.log(`Started process ${pid}`) );

