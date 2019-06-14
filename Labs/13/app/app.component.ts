import { Component } from '@angular/core';
import { DataService } from './data-service.service';


@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
  title = 'counterApp';
  isvisibility=false;

  constructor(private DataService:DataService)
  {
    this.DataService.getOnlineData();
  }
}
