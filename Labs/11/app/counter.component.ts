import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  template: `
  <button (click)="decr()" >-</button> {{counterValue}} <button (click)="incr()" >+</button>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  counterValue;
  @Output() counterChange;
  @Input() count;

  constructor() {
    this.counterChange=new EventEmitter();
   }



   decr(){
    --this.counterValue;
    this.counterChange.emit(this.counterValue);
   }

   incr(){
    ++this.counterValue;
    this.counterChange.emit(this.counterValue);
   }


  ngOnInit() {
    this.counterValue=this.count;
  }

}
