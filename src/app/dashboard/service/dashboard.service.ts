import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Customer } from '../customer/type/customer';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  customer$ = new BehaviorSubject<Customer[]>([]);
  constructor() {}

  get customerArray() {
    return this.customer$.value || [];
  }

  getCustomerList() {
    this.customer$.next(JSON.parse(localStorage.getItem('dataSource')!));
  }

  addCustomer(customer: Customer[] | Customer) {
    localStorage.setItem('dataSource', JSON.stringify(customer));
  }
}
