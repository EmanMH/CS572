import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable,of } from "rxjs";
import { DataService } from '../data-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class validateGuard implements CanActivate {
    user;
    isFound: boolean;
    subscription;
    constructor(private dataService: DataService,private router:Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log(route.params['uuid']);
        this.subscription= this.dataService.getUser(route.params['uuid']).subscribe(data=>this.user=data);
        if(!(this.user.length>0))
        {
            this.router.navigate(['/notFound']);
        }
        
        return this.user.length>0;
    }

    ngOnDestroy()
    {
        this.subscription.unsubscribe();
    }

   
}