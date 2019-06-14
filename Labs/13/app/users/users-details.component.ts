import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  template: `<h2>User Details</h2>
  <div *ngIf="user">
  gender:{{user.gender}}<br/>
  first name: {{user.name.first}}<br/>
  last name: {{user.name.last}}<br/>
  email: {{user.email}}<br/>
  age: {{user.dob.age}}<br/>
  </div>
  `,
  styles: []
})
export class UsersDetailsComponent implements OnInit {

  uuid;
  user;

  constructor(private route : ActivatedRoute, private dataService : DataService) {
    route.params.subscribe(p=>{
      this.uuid = p['uuid'];
      dataService.getCachedData()
      .subscribe(d=>{
        this.user = d.results.filter(u=>u.login.uuid == this.uuid)[0];
      })
    });
   }


  ngOnInit() {
  }

}
