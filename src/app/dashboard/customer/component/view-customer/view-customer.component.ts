import { Action, EventAction } from '../../../../type/action';
import { DashboardService } from './../../../service/dashboard.service';
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

  actionList: Action[] = [
    { name: 'edit', title: 'Edit' },
    { name: 'delete', title: 'Delete' },
  ];

  constructor(private dashboard: DashboardService, private router: Router) {}

  ngOnInit(): void {
    this.dashboard.getCustomerList();
  }

  get rows() {
    const rows: Table[] = [];
    this.dashboard.customerArray.forEach((c: Customer) => {
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

  editCustomer(id: string) {
    this.router.navigate(['/edit' + id]);
  }

  deleteCustomer(id: string) {}

  actions(action: EventAction) {
    switch (action.name) {
      case 'edit':
        debugger;
        this.editCustomer(action.id);
        break;
      case 'delete':
        this.deleteCustomer(action.id);
        break;
    }
  }
}
