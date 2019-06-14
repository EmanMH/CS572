import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { pluck, share, shareReplay, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  subscription;
  constructor(private http : HttpClient) { }

  getOnlineData(){
    this.subscription= this.http.get('https://randomuser.me/api/?results=10')
    .subscribe(data=>window.localStorage.setItem('usersData',JSON.stringify(data)));
  }

  getCachedData(){
     let users$=of(JSON.parse(window.localStorage.getItem('usersData'))).pipe(shareReplay(1));
     return users$;
  }

  getUser(uuid){
    return of(JSON.parse(localStorage.getItem('usersData')).results.filter(u=>u.login.uuid==uuid)).pipe(shareReplay(1));
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
