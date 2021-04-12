import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestRegistrationService } from '../rest-registration.service';
import { Restaurant } from '../restaurant';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  restaurant: Restaurant= new Restaurant("","","","","");
  message: any;
  constructor(private service:RestRegistrationService, private router: Router) { }

  ngOnInit() {
    
  }
  public registerNow(){
    let resp=this.service.doRegistration(this.restaurant);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(["/search"])
  }
  

}
