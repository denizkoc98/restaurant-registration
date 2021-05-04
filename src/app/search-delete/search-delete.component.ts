import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestRegistrationService } from '../rest-registration.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.scss']
})
export class SearchDeleteComponent implements OnInit {

  restaurants: any;
  
  
  constructor(private router: Router, private service:RestRegistrationService) { }
  
  public deleteRegistration (rest_id:number){
    let resp=this.service.cancelRegistration(rest_id);
    resp.subscribe((data)=>this.restaurants=data);
    


  }

  public findRestaurantById (rest_id: number){
    let resp=this.service.findRestaurant(rest_id);
    resp.subscribe((data)=>this.restaurants=data);
    
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
