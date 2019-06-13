import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <ul>
    <li *ngFor="let pet of items">{{pet | multi:3}}</li>
    </ul>
  `,
  styles: ['ul{color:red}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DumbComponent implements OnInit {
  @Input() items;

  constructor() { }

  ngOnInit() {
  }


}
