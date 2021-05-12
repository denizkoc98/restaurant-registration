import { Component, OnInit } from '@angular/core';
import { CustRegistrationService } from '../cust-registration.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketData: any;
  constructor(private custService: CustRegistrationService) { }

  ngOnInit(): void {
    let cust=  JSON.parse(localStorage.getItem('customer')!); 
    let id =cust['id']; 
    let resp=this.custService.getBasket(id);
    resp.subscribe((data)=>{this.basketData=data;
      
    });
  }

  doPurchase(){

    let cust=  JSON.parse(localStorage.getItem('customer')!); 
    let id =cust['id']; 
    let resp=this.custService.doPurchase(id);
    resp.subscribe((data)=>{this.basketData=data;
      
    });
  }
}
