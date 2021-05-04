import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestRegistrationService } from '../rest-registration.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
menus: any
rest_id: any;

  constructor(private service:RestRegistrationService, private actRoute: ActivatedRoute, private router: Router) { }

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

  public addToCart (){
    //let resp=this.service.addTocart(menuitem_id);
   
    


  }

}
