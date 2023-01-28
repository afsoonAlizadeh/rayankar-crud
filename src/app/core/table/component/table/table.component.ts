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
  row = {};

  @Output() eventAction = new EventEmitter<Action>();
  constructor() {}

  ngOnInit(): void {}

  actionButton(actionButton: string, row: Table) {
    row.columns.map((user: any) => {
      this.row = { ...this.row, [user.label]: user.value };
    });

    const action: Action = { name: actionButton, data: this.row };

    this.eventAction.emit(action);
  }
}
