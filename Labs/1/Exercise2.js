var app={
    promiseFetch:function ()
    {
        fetch('https://randomuser.me/api/').then(
            response=> response.json()
        ).then(
             (myjson)=>{
            let {name,location}= myjson.results[0];
            console.log({name,location});
            }
        
        )
    },

    asyncFetch: async function ()
    {
        try
        {
            let results= await  fetch('https://randomuser.me/api/').
            then(response=>response.json());
            let {name,location}= results.results[0];
            console.log({name,location});

        }
        catch(error)
        {
            console.log(error);
        }

    },

    reactiveFetch: function ()
    {
        const {of,from,fromEvent}=rxjs;
        const{flatMap}=rxjs.operators;
        const obj$=fromEvent(document.
            getElementsByName('reactiveFetch')
        ,'click');
        obj$.subscribe((e)=>{ 
            const myStream$=of('https://randomuser.me/api/')
            .pipe (
                flatMap( (requestUrl) => from(fetch(requestUrl)
                .then(response=>response.json())))
            ).subscribe(
                (response)=> {
                    let {name,location}= response.results[0];        
                    console.log({name,location});
                }
            )
        } );

    }
}

app.reactiveFetch();


//All the three are asynchronous

