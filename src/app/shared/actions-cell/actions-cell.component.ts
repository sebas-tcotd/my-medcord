import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { actionsCellMock } from '../../mocks/actions-cell.mock';
import { ActionsCellOptions } from './actions-cell.interface';

@Component({
  selector: 'app-actions-cell',
  templateUrl: './actions-cell.component.html',
  styles: [],
})
export class ActionsCellComponent implements ICellRendererAngularComp {
  @Input() options: ActionsCellOptions[] = actionsCellMock;

  public params!: ICellRendererParams;
  public keyId!: any;

  constructor() {}

  agInit(params: ICellRendererParams<any, any>): void {
    this.params = params;
    this.keyId = this.params.data?.id;
  }

  refresh(): boolean {
    return false;
  }
}
