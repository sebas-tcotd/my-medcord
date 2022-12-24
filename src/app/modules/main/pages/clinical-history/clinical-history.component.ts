import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColDef } from 'ag-grid-community';
import { MainFeatureState } from '../../state/main.reducer';
import { ClinicalHistoryTableColumns } from './clinical-history.config';
import * as MainActions from '../../state/actions';
import { Observable } from 'rxjs';
import { MedicalRecordResponse } from '../../../../core/interfaces/medical-record.interface';
import { selectMedicalRecords } from '../../state/selectors/medical-records.selectors';

@Component({
  selector: 'app-clinical-history',
  templateUrl: './clinical-history.component.html',
  styles: [],
})
export class ClinicalHistoryComponent implements OnInit {
  public medicalRecords$!: Observable<MedicalRecordResponse[] | null>;
  public columnDefs: ColDef[] = ClinicalHistoryTableColumns;

  constructor(private readonly store: Store<MainFeatureState>) {}

  ngOnInit(): void {
    this.store.dispatch(MainActions.loadMedicalRecords());
    this.getMedicalRecords();
  }

  private getMedicalRecords() {
    this.medicalRecords$ = this.store.select(selectMedicalRecords);
  }
}
