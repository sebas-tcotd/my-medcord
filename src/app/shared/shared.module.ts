import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [SidebarComponent, TableComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, TableComponent],
})
export class SharedModule {}
