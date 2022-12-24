import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { LoadingComponent } from './loading/loading.component';
import { ActionsCellComponent } from './actions-cell/actions-cell.component';

@NgModule({
  declarations: [SidebarComponent, TableComponent, LoadingComponent, ActionsCellComponent],
  imports: [CommonModule, RouterModule, AgGridModule],
  exports: [SidebarComponent, TableComponent, LoadingComponent, ActionsCellComponent],
})
export class SharedModule {}
