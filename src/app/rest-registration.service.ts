import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Restaurant } from './restaurant';


@Injectable({
  providedIn: 'root'
})
export class RestRegistrationService {

  constructor(private http:HttpClient) { }


    public doRegistration(restaurant: Restaurant){


      return this.http.post("http://localhost:8080/restaurant/register", restaurant, {responseType: "text" as "json"});
    }
    public getAllRestaurants(){

      return this.http.get("http://localhost:8080/restaurant/getAllRestaurants");

    }
    public findRestaurant(rest_id: number){

      return this.http.get("http://localhost:8080/restaurant/findRestaurant/"+ rest_id);

    }
    public cancelRegistration (rest_id: number){

      return  this.http.delete("http://localhost:8080/restaurant/cancel/"+ rest_id);     
    }

    public login(username:string, password:string){
     const headers=new HttpHeaders({Authorization: 'Basic' + btoa(username+":"+ password)});
     return this.http.get("http://localhost:8080/customer/login", {headers, responseType:'text' as 'json'})

    }

    public getMenu(rest_id: number){
      return  this.http.get("http://localhost:8080/restaurant/getmenu/"+ rest_id);  

    }

  }

  