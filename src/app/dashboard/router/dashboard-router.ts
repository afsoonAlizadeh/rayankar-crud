import { EditCustomerComponent } from './../customer/component/edit-customer/edit-customer.component';
import { AddCustomerComponent } from './../customer/component/add-customer/add-customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCustomerComponent } from '../customer/component/view-customer/view-customer.component';
const routes: Routes = [
  { path: '', component: ViewCustomerComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: 'edit', component: EditCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRouter {}
