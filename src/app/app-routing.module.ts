import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"register", component: RegistrationComponent},
  {path:"search", component: SearchDeleteComponent},
  {path:"login", component: LoginComponent},
  {path: "customer/register", component: CustomerRegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
