const fs=require('fs');
readFile=function (filename)
{

    const strm=fs.createReadStream(filename, { highWaterMark: 128 * 1024 });
    console.log("in read file");

    strm.on('data',(data)=>{
        process.send(JSON.stringify(data));
    });
    strm.on('end',(d)=>{process.send("end")});
}

process.on('message', (msg) => {
    readFile(msg);
  });