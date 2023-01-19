import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  form!: FormGroup;
  firstName: any = [];
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('customer'));

    this.firstName = this.route.snapshot.paramMap.get('customer');
  }

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
