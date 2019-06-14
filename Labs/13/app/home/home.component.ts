import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <a [routerLink]="['users']">Users</a><br/>`,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
