import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Customer } from '../customer';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { RestRegistrationService } from '../rest-registration.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  
  username= ""
  password=""
  id:any
  //customer: Customer= new Customer("","","","","","");
  invalidLogin=false;

  constructor(
    private router: Router,  private service: AuthenticationServiceService, private http:HttpClient,  public dialog: MatDialog) { }

  ngOnInit() {
  }

  doLogin(){
    (this.service.authenticate(this.username, this.password).subscribe(
      data => {
        console.log(this.username)
        this.router.navigate(['/search'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.openDialog()
      }
    )
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  doRegister(){
    this.router.navigate(['/customer/register']);

  }

  
  


}
