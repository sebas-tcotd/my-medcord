import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [SidebarComponent, TableComponent, LoadingComponent],
  imports: [CommonModule, RouterModule, AgGridModule],
  exports: [SidebarComponent, TableComponent, LoadingComponent],
})
export class SharedModule {}
