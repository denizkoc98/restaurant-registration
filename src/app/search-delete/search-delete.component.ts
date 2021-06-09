import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustRegistrationService } from '../cust-registration.service';
import { RestRegistrationService } from '../rest-registration.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.scss']
})
export class SearchDeleteComponent implements OnInit {

  restaurants: any;
  myData: any;
  custData:any;
  filter:any;
  
  
  
  constructor(private router: Router, private service:RestRegistrationService, private customerService: CustRegistrationService,) {
    const myData = (localStorage.getItem('username')!);
    this.customerService.getUser(myData).subscribe((customer) => {
      this.custData = customer; 
      console.log(this.custData);
       //Customer:customer  = this.custData;
       localStorage.setItem('customer',JSON.stringify(this.custData));
    });
   }
  
  public deleteRegistration (rest_id:number){
    let resp=this.service.cancelRegistration(rest_id);
    resp.subscribe((data)=>this.restaurants=data);
    


  }

  public findRestaurantByName (rest_name: any){
    let resp=this.service.getAllRestaurants();
    console.log(rest_name)
   resp.subscribe((data)=>
   {this.filter=data
    this.restaurants=this.filter
   this.restaurants = this.restaurants.filter((p: { rest_name: any; })=>p.rest_name.includes(rest_name));
  
   });
    
  }

  ngOnInit(): void {
    let resp=this.service.getAllRestaurants();
    resp.subscribe((data)=>this.restaurants=data);

  
  }

  
  public onSelect (rest_id: any){
    console.log(rest_id);
    this.router.navigate(['/restaurant', rest_id]);

  }
}
