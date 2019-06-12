import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-counter-component [count]="componentCounterValue" (counterChange)="changed($event,1)">
  </app-counter-component><br/>Component counter value = {{componentCounterValue}}<br/>
  <app-counter-component [count]="componentCounterValue1" (counterChange)="changed($event,2)">
  </app-counter-component><br/>Component counter value = {{componentCounterValue1}}<br/>
  <app-counter-component [count]="componentCounterValue2" (counterChange)="changed($event,3)">
  </app-counter-component><br/>Component counter value = {{componentCounterValue2}}<br/>`,
  styles: []
})
export class AppComponent {
  title = 'counterApp';
  componentCounterValue;
  componentCounterValue1;
  componentCounterValue2;

  constructor(){
    this.componentCounterValue=5;
    this.componentCounterValue1=6;
    this.componentCounterValue2=7;
  }
  changed(e,num)
  {
    if(num==1)
    this.componentCounterValue=e;
    else if(num==2)
    this.componentCounterValue1=e;
    else if (num==3)
    this.componentCounterValue2=e;
  }
}
