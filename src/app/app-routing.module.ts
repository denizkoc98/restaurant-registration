import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcountComponent } from './acount/acount.component';
import { BasketComponent } from './basket/basket.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"register", component: RegistrationComponent},
  {path:"search", component: SearchDeleteComponent},
  {path:"login", component: LoginComponent},
  {path: "customer/register", component: CustomerRegistrationComponent},
  {path:"", component: LoginComponent},
  { path: 'restaurant/:rest_id', component: MenuComponent},
  { path: 'myacount', component: AcountComponent},
  { path: 'basket', component: BasketComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
