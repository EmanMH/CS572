var EventsEmitter=require('events');

class Gym extends EventsEmitter
{
    constructor(){
        super();
       setInterval(()=>this.emit('boom'),1000);
    }
}

var myGym=new Gym();

myGym.on('boom',()=>
{console.log("Athlete is working out");}
)