import { DashboardRouter } from './router/dashboard-router';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './customer/component/add-customer/add-customer.component';
import { EditCustomerComponent } from './customer/component/edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './customer/component/view-customer/view-customer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ViewCustomerComponent,
    AddCustomerComponent,
    EditCustomerComponent,
  ],
  imports: [CommonModule, CoreModule, DashboardRouter, ReactiveFormsModule],
})
export class DashboardModule {}
