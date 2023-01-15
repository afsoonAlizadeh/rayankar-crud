import { Table } from './../../type/table';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 't-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() header: Table = { columns: [] };
  @Input() rows: Table[] = [];
  constructor() {}

  ngOnInit(): void {}
}
