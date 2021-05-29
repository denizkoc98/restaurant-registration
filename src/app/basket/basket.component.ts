import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustRegistrationService } from '../cust-registration.service';
import { PurchasedialogComponent } from '../purchasedialog/purchasedialog.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketData: any;
  constructor(private custService: CustRegistrationService, public dialog: MatDialog, private router: Router) { }

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
    this.openDialog();
    this.router.navigate(["/search"])
      
      
    });
  }

  addItem(itemId:any){
    let cust=  JSON.parse(localStorage.getItem('customer')!); 
    let id =cust['id'];
  
    let resp=this.custService.add(itemId, id);
    resp.subscribe((data)=>this.basketData=data);


  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PurchasedialogComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  removeItem(itemId:any){

    let cust=  JSON.parse(localStorage.getItem('customer')!); 
    let id =cust['id']; 
    let resp=this.custService.removeItem(itemId, id);
    resp.subscribe((data)=>{this.basketData=data;
      
      
    });



  }
}
