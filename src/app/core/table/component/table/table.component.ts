import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventAction } from './../../../../type/action';
import { Action } from '../../../../type/action';
import { Table } from './../../type/table';

@Component({
  selector: 't-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() header: Table = { columns: [] };
  @Input() rows: Table[] = [];
  @Input() actions: Action[] = [];

  @Output() eventAction = new EventEmitter<EventAction>();
  constructor() {}

  ngOnInit(): void {}

  actionEvent(id: string, name: string) {
    const eventAction = { id: id, name: name };
    this.eventAction.emit(eventAction);
  }
}
