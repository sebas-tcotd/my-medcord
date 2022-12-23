import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concat, concatMap, map, of, switchMap } from 'rxjs';
import * as MainActions from '../actions';
import * as RootActions from '../../../../store/actions';

import { MedicalRecordsService } from '../../../../core/services/medical-records.service';

@Injectable()
export class MedicalRecordsEffects {
  constructor(
    private actions: Actions,
    private medicalRecordService: MedicalRecordsService
  ) {}

  public createMedicalRecord$ = createEffect(() =>
    this.actions.pipe(
      ofType(MainActions.medicalRecordCreation),
      concatMap((action) =>
        concat(
          of(RootActions.loadingStarted()),
          this.medicalRecordService.createMedicalRecord(action.payload).pipe(
            map(() => MainActions.medicalRecordSuccessfull()),
            catchError((error) =>
              of(MainActions.medicalRecordError({ payload: error }))
            )
          ),
          of(RootActions.loadingFinished())
        )
      )
    )
  );

  public loadMedicalRecords$ = createEffect(() =>
    this.actions.pipe(
      ofType(MainActions.loadMedicalRecords),
      switchMap(() =>
        this.medicalRecordService.getMedicalRecords().pipe(
          map((response) =>
            MainActions.loadMedicalRecordsSuccessfull({
              medicalRecords: response,
            })
          ),
          catchError((error) =>
            of(MainActions.loadMedicalRecordsFail({ payload: error }))
          )
        )
      )
    )
  );
}
