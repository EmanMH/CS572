import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <app-dumb [items]="pets" makeBigger></app-dumb>
  `,
  styles: []
})
export class SmartComponent implements OnInit {

  pets=['Cat','Dog','Turtle','Fish','Bird'];
  constructor() {
   }

  ngOnInit() {
    this.pets==['Cat','Dog','Turtle','Fish','Bird'];

  }

}
