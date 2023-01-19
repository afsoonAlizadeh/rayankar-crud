import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Action } from '../../../../type/action';
import { Table } from './../../type/table';
import { Customer } from 'src/app/dashboard/customer/type/customer';

@Component({
  selector: 't-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() header: Table = { columns: [] };
  @Input() rows: Table[] = [];
  @Input() actions: Action[] = [];

  @Output() eventAction = new EventEmitter<Action>();
  constructor() {}

  ngOnInit(): void {}

  actionButton(actionButton: string, row: Table) {
    const action: Action = { name: actionButton, data: row.columns };
    this.eventAction.emit(action);
  }
}
