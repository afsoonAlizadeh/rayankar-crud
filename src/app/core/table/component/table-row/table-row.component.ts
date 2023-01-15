import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Table } from '../../type/table';

@Component({
  selector: 't-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css'],
})
export class TableRowComponent implements OnInit {
  @Input() row: Table = {
    columns: [],
  };
  @Input()
  @HostBinding('attr.header')
  isHeader: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  get columns() {
    return this.row.columns;
  }
}
