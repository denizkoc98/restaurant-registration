import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Customer } from '../customer';
import { RestRegistrationService } from '../rest-registration.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  
  username= ""
  password=""
  //customer: Customer= new Customer("","","","","","");
  invalidLogin=false;

  constructor(
    private router: Router,  private service: AuthenticationServiceService, private http:HttpClient) { }

  ngOnInit() {
  }

  doLogin(){
    (this.service.authenticate(this.username, this.password).subscribe(
      data => {
        
        this.router.navigate(['/search'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
      }
    )
    );
  }

  
  


}
