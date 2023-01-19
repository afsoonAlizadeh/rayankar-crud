import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';
import { Table } from '../../type/table';
import { Action } from 'src/app/type/action';

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

  @Input() actions: Action[] = [];

  @Output() actionClickButton = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  get columns() {
    return this.row.columns;
  }

  onAction(action: string) {
    this.actionClickButton.emit(action);
  }
}
