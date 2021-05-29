import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';
import { CustRegistrationService } from '../cust-registration.service';
import { LoggedoutComponent } from '../loggedout/loggedout.component';

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.scss']
})
export class AcountComponent implements OnInit {

  basketData: any;
  constructor(private custService: CustRegistrationService, private service: AuthenticationServiceService, 
    private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    let cust=  JSON.parse(localStorage.getItem('customer')!); 
    let id =cust['id']; 
    let resp=this.custService.getdetails(id);
    
    resp.subscribe((data)=>{this.basketData=data;
      console.log(this.basketData)
      
      
    });
  }

  logout(){
    this.service.logOut();
    this.router.navigate(["/login"])
    this.openDialog();


  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoggedoutComponent, {
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      
      
    });
  }
}
