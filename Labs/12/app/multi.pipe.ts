import { Pipe, PipeTransform, Input, Output } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'multi'
})

export class MultiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    let myoutput='';
    for (let index = 0; index < args; index++) {
      myoutput+=value.toString()+' ';
      
    }
    return myoutput;
  }

}
