Array.prototype.removeNum= function (number) {
    let arr=this;
    return new Promise(function(resolve,reject)
    {
        let newarr = arr.filter(a => a !== number);
        resolve (newarr);
    });
}


console.log("Start");
[1,3,4,2,1,5].removeNum(1).then(data => console.log(data));
console.log("Finish");

//The effect on event loop
//The created promises will be pushed to a promises queue
//and it won't cause any blocking to the event loop 