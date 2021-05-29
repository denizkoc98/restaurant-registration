import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustRegistrationService {

  constructor(private http:HttpClient) { }
  public doCustomerRegistration(customer: Customer){


    return this.http.post("http://localhost:8080/customer/add", customer, {responseType: "text" as "json"});
  }
  public getAllCustomers(){

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

  public getUser(myData: string): Observable<Customer>{

    console.log(myData);
    return this.http.get<Customer>("http://localhost:8080/customer/findcustomerbyname/"+ myData);

  }
  public addToCart(menuItemId: number, id: number){
    
    return this.http.post("http://localhost:8080/restaurant/basket/addtocart/"+ menuItemId +"/"+ id ,{responseType: "text"});
   }

   public getBasket(id:number){


    return this.http.get("http://localhost:8080/restaurant/basket/"+ id );
  }


  public getdetails(id:number){


    return this.http.get("http://localhost:8080/restaurant/purchasedetails/"+ id );
  }
  public removeItem(mid:number, cid:number){


    return this.http.get("http://localhost:8080/restaurant/basket/remove/"+ mid + "/"+ cid);
  }

  public add(mid:number, cid:number){


    return this.http.get("http://localhost:8080/restaurant/basket/add/"+ mid + "/"+ cid);
  }
  
  public doPurchase(custId:number){

    return this.http.post("http://localhost:8080/restaurant/basket/purchase/"+ custId ,{responseType: "text"});
  }  
   

}
