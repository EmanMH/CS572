import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { pluck, share, shareReplay, tap } from 'rxjs/operators';
import { userInfo } from 'os';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  subscription;
  constructor(private http : HttpClient) { }

  getUserByEmail(email){
    this.subscription= this.http.get('http://localhost:3000/users',{params:{'email':'none'}});
    
    return this.subscription;
  }

  saveUser(user)
  {
    return this.http.post('http://localhost:3000/users/',user.value);
  }

  login(data): Observable<any> {
    return this.http.post('http://localhost:3000/users/'+ "login", data);
  }

  // getCachedData(){
  //    let users$=of(JSON.parse(window.localStorage.getItem('usersData'))).pipe(shareReplay(1));
  //    return users$;
  // }

  // getUser(uuid){
  //   return of(JSON.parse(localStorage.getItem('usersData')).results.filter(u=>u.login.uuid==uuid)).pipe(shareReplay(1));
  // }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
