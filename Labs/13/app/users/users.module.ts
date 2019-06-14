import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersDetailsComponent } from './users-details.component';
import {RouterModule,Routes} from '@angular/router';
import { validateGuard } from './validateGuard';

const myRoutes:Routes=[{path:'',component:UsersComponent},
{path:'users',component:UsersComponent},
{ path: 'userDetails/:uuid', component: UsersDetailsComponent,canActivate:[validateGuard] }
]

@NgModule({
  declarations: [UsersComponent, UsersDetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(myRoutes)
  ],
  providers:[validateGuard],
  bootstrap:[UsersComponent]
})
export class UsersModule { }
