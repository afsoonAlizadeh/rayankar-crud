import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  buildForm() {
    this.form = this.fb.group({
      id: Math.floor(Math.random() * 100000000).toString(),
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
      bankAccountNumber: ['', [Validators.required]],
    });
  }
}
