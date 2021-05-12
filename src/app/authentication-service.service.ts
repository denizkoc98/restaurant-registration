import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private httpClient: HttpClient) { }
  username:any;
  authenticate(username: string, password: string){

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get('http://localhost:8080/customer/login/',{headers, responseType:'text' as 'json'}).pipe(
     map(
       userData => {
         
        localStorage.setItem('username',username);
        
        return userData;
       }
     )
    );


  }
  isUserLoggedIn() {
    let user = localStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    localStorage.removeItem('username')
  }



}
