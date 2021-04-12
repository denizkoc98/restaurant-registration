import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustRegistrationService } from '../cust-registration.service';

import {Customer} from '../customer'

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {

  customer: Customer= new Customer ("","","","","","")
  message: any;
  constructor(private service: CustRegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  public customerRegister(){
    let resp=this.service.doCustomerRegistration(this.customer);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(["/login"])

  }
}
