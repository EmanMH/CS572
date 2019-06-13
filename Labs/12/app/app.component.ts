import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-smart appIsVisible [myvisibility]="isvisibility"></app-smart>`,
  styles: []
})
export class AppComponent {
  title = 'counterApp';
  isvisibility=true;
}
