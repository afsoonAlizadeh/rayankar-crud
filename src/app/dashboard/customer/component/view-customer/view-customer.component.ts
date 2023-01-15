import { Component, OnInit } from '@angular/core';
import { Customer } from '../../type/customer';
import { Table } from 'src/app/core/table/type/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent implements OnInit {
  header: Table = {
    columns: [
      { value: 'Firstname' },
      { value: 'Lastname' },
      { value: 'DateOfBirth' },
      { value: 'PhoneNumber' },
      { value: 'Email' },
      { value: 'BankAccountNumber' },
    ],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  get rows() {
    const rows: Table[] = [];
    const data = JSON.parse(localStorage.getItem('dataSource')!);

    data.forEach((c: Customer) => {
      rows.push({
        columns: [
          {
            label: 'Firstname',
            value: c.firstName,
          },
          {
            label: 'Lastname',
            value: c.lastName,
          },
          {
            label: 'DateOfBirth',
            value: c.dateOfBirth,
          },
          {
            label: 'PhoneNumber',
            value: c.phoneNumber,
          },
          {
            label: 'Email',
            value: c.email,
          },
          {
            label: 'BankAccountNumber',
            value: c.bankAccountNumber,
          },
        ],
      });
    });
    return rows;
  }

  addCustomer() {
    this.router.navigate(['/add']);
  }
}
