const {promisify}=require('util');

var dns=require('dns');

//Promisify approach

var syncResolve=promisify(dns.resolve4);

async function main ()
{
    try
    {
        const mydns= await syncResolve("www.mum.edu");
        console.log('IP: ',mydns);
    }
    catch (err)
    {
        console.log('Error: ',err);
    }
}

main();

//promise object approach 

//  function mydnsobj (url)
// {
//     return new Promise(function(resolve,reject) {
//         const mydns= dns.resolve4(url,(err,data)=>{
//             if(err)
//             reject(err);
//             else
//             resolve(data);
//         });
//     });
// }

// async function main()
// {
//     try
//     {
//         const mydns= await mydnsobj("www.mum.edu");
//         console.log('IP: ',mydns);
//     }
//     catch (err)
//     {
//         console.log('Error: ',err);
//     }
// }



