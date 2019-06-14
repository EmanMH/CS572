import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { DataService } from './data-service.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const myRoutes:Routes=[{path:'',component:HomeComponent},
{path:'users',loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)},
{path:'notFound',component:NotFoundComponent},
{path:'**',redirectTo:''}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(myRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
