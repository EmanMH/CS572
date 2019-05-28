Array.prototype.pluck= function (data) {
    let arr=this;
    setImmediate ( () => {
        if(data)
    {
        console.log( Math.max.apply(null,arr));
    }
    else
        console.log(Math.min.apply(null,arr));
    })
}

console.log('start');
[1,2,3,4,5,6,7,8].pluck(true);
[1,2,3,4,5,6,7,8].pluck(false);
console.log('end');