import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import {HttpClientModule} from '@angular/common/http';
import { RestRegistrationService } from './rest-registration.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthenticationServiceService } from './authentication-service.service';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { AcountComponent } from './acount/acount.component';
import { BasketComponent } from './basket/basket.component';
import { PurchasedialogComponent } from './purchasedialog/purchasedialog.component';
import { AddedComponent } from './added/added.component';
import { LoggedoutComponent } from './loggedout/loggedout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SearchDeleteComponent,
    LoginComponent,
    CustomerRegistrationComponent,
    MyDialogComponent,
    MenuComponent,
    HeaderComponent,
    AcountComponent,
    BasketComponent,
    PurchasedialogComponent,
    AddedComponent,
    LoggedoutComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
    
  ],
  providers: [RestRegistrationService, AuthenticationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
