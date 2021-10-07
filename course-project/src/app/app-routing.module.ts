import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ShoppingCardComponent} from "./shopping-card/shopping-card.component";
import {CheckOutComponent} from "./check-out/check-out.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {OrderSuccessComponent} from "./order-success/order-success.component";
import {ProductsComponent} from "./products/products.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminProductsComponent} from "./admin/admin-products/admin-products.component";
import {AdminOrdersComponent} from "./admin/admin-orders/admin-orders.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'my-orders', component: MyOrdersComponent},
  {path: 'shopping-card', component: ShoppingCardComponent},
  {path: 'check-out', component: CheckOutComponent},
  {path: 'order-success', component: OrderSuccessComponent},
  {path: 'admin', component: AdminComponent, children: [
      {path: 'admin-products', component: AdminProductsComponent},
      {path: 'admin-orders', component: AdminOrdersComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
