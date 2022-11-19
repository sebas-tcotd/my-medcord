import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ClinicalHistoryTableColumns } from './clinical-history.config';

@Component({
  selector: 'app-clinical-history',
  templateUrl: './clinical-history.component.html',
  styles: [],
})
export class ClinicalHistoryComponent implements OnInit {
  public columnDefs: ColDef[] = ClinicalHistoryTableColumns;

  constructor() {}

  ngOnInit(): void {}
}
