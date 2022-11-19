import { Component, Input, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @ViewChild('tableGrid') grid!: AgGridAngular;
  @Input() rowData: any;
  @Input() columnDefs: ColDef[] = [];

  private _noRowsToShowMessage: string = '';

  constructor() {
    this.noRowsToShowMessage = 'Aún no existen registros';
  }

  public onGridSizeChanged(params: any) {
    const width = params.clientWidth;
    if (width > 480) {
      params.api.sizeColumnsToFit();
    } else {
      params.columnApi.autoSizeAllColumns();
    }
  }

  public get noRowsToShowMessage(): string {
    return this._noRowsToShowMessage;
  }
  public set noRowsToShowMessage(value: string) {
    this._noRowsToShowMessage = value;
  }
}
