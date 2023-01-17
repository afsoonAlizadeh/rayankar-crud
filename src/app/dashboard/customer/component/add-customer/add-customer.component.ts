import { Router } from '@angular/router';
import { DashboardService } from './../../../service/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  form!: FormGroup;
  constructor(private dashboard: DashboardService, private router: Router) {}

  ngOnInit(): void {
    this.dashboard.getCustomerList();
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      id: new FormControl(Math.floor(Math.random() * 100000000).toString()),
      firstName: new FormControl(),
      lastName: new FormControl(),
      dateOfBirth: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      bankAccountNumber: new FormControl(),
    });
  }

  onSubmit() {
    const customers = [...this.dashboard.customerArray, this.form.value];
    this.dashboard.addCustomer(customers);
    this.router.navigate(['/']);
  }
}
