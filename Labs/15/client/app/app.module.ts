import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthguardGuard } from './authguard.guard';
import { ErrorComponent } from './error/error.component';

const myRoutes:Routes=[{path:'',component:HomeComponent},
{path:'usersignup',component:SignupComponent},
{path:'login',component:LoginComponent},
{ path: 'protected', component: ProtectedComponent, canActivate: [AuthguardGuard] },
{path:'**',redirectTo:''}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ProtectedComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(myRoutes),ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
