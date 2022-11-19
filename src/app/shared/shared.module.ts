import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [SidebarComponent, TableComponent],
  imports: [CommonModule, RouterModule, AgGridModule],
  exports: [SidebarComponent, TableComponent],
})
export class SharedModule {}
