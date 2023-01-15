import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRowComponent } from './component/table-row/table-row.component';
import { TableComponent } from './component/table/table.component';

@NgModule({
  declarations: [TableComponent, TableRowComponent],
  imports: [CommonModule],
  exports: [TableComponent],
})
export class TableModule {}
