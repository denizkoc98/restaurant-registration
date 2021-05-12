import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustRegistrationService } from '../cust-registration.service';
import { Customer } from '../customer';
import { RestRegistrationService } from '../rest-registration.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
menus: any
rest_id: any;
custData: any;
user: any;
myData: any;
itemId: any;
message:any;

  constructor(private service:RestRegistrationService, private actRoute: ActivatedRoute, private router: Router, private customerService: CustRegistrationService) { 
    const myData = (localStorage.getItem('username')!);
    console.log(myData);
    this.customerService.getUser(myData).subscribe((customer) => {
    this.custData = customer; 
    console.log(this.custData);
     //Customer:customer  = this.custData;
     localStorage.setItem('customer',JSON.stringify(this.custData));
  });
    
  }

  ngOnInit(): void {
    this.rest_id= this.actRoute.snapshot.params['rest_id'];
    console.log(this.rest_id);
    this.loadProductDetails(this.rest_id);
  }

  loadProductDetails(rest_id:any){
    this.service.getMenu(rest_id).subscribe((data) => {
      this.menus = data;
      

    });
  }

  public addToCart (itemId:any){
    //let resp=this.service.addTocart(menuitem_id);
   
    
    //let cust = (localStorage.getItem('customer')! );
    let cust=  JSON.parse(localStorage.getItem('customer')!); 
    let id =cust['id'];
    console.log(id);
    console.log(itemId)
    let resp=this.customerService.addToCart(itemId, id);
    resp.subscribe((data)=>this.message=data);

    
    //let user = localStorage.getItem('username')
    
}

}
