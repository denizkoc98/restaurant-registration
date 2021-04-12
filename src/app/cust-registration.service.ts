import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustRegistrationService {

  constructor(private http:HttpClient) { }
  public doCustomerRegistration(customer: Customer){


    return this.http.post("http://localhost:8080/customer/add", customer, {responseType: "text" as "json"});
  }
  public getAllRestaurants(){

    return this.http.get("http://localhost:8080/customer/getAllCustomers");

  }
  public findRestaurant(rest_id: number){

    return this.http.get("http://localhost:8080/customer/findCustomer/"+ rest_id);

  }
  public cancelRegistration (rest_id: number){

    return  this.http.delete("http://localhost:8080/customer/cancel/"+ rest_id);     
  }

  public login(username:string, password:string){
   const headers=new HttpHeaders({Authorization: 'Basic' + btoa(username+":"+ password)});
   return this.http.get("http://localhost:8080/customer/login", {headers, responseType:'text' as 'json'})

  }

}
