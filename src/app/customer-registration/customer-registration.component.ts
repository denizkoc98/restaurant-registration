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

  customer: Customer= new Customer (1,"","","","","","")
  message: any;
  constructor(private custservice: CustRegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  public customerRegister(){
    let resp=this.custservice.doCustomerRegistration(this.customer);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(["/login"])

  }
}
