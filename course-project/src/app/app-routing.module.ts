import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ShoppingCardComponent} from "./shopping-card/shopping-card.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shopping-card', component: ShoppingCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
