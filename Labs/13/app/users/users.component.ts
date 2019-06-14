import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-users',
  template: `
  <ul>
  <li *ngFor="let item of (users | async).results">
  <a [routerLink]="['userDetails', item.login.uuid]">{{item.name.first}}</a>
  </li>
  </ul>
  `,
  styles: ['']
})
export class UsersComponent implements OnInit {
  users;
  
  constructor(private dataService: DataService) { 

    

  }

  ngOnInit() {
    this.users=this.dataService.getCachedData();
  }

}
