import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concat, concatMap, map, of, switchMap } from 'rxjs';
import { AppointmentService } from '../../../../core/services/appointment.service';
import * as MainActions from '../actions';
import * as RootActions from '../../../../store/actions';

@Injectable()
export class AppointmentEffects {
  constructor(
    private actions: Actions,
    private appointmentService: AppointmentService
  ) {}

  createAppointment$ = createEffect(() =>
    this.actions.pipe(
      ofType(MainActions.medicalAppointmentCreation),
      concatMap((action) =>
        concat(
          of(RootActions.loadingStarted()),
          this.appointmentService.createAppointment(action.payload).pipe(
            map((response) =>
              MainActions.medicalAppointmentSuccess({ appointment: response })
            ),
            catchError((error) =>
              of(MainActions.medicalAppointmentFailed({ payload: error }))
            )
          ),
          of(RootActions.loadingFinished())
        )
      )
    )
  );

  getAppointment$ = createEffect(() =>
    this.actions.pipe(
      ofType(MainActions.medicalAppointmentLoad),
      switchMap(({ doctorId, medicalRecordId }) =>
        this.appointmentService
          .getAppointmentsByMedicAndHistoryId(Number(medicalRecordId), doctorId)
          .pipe(
            map((response) =>
              MainActions.medicalAppointmentFound({ payload: response })
            )
          )
      )
    )
  );

  updateAppointment$ = createEffect(() =>
    this.actions.pipe(
      ofType(MainActions.medicalAppointmentUpdate),
      concatMap(({ data, doctorId, medicalRecordId }) =>
        concat(
          of(RootActions.loadingStarted()),
          this.appointmentService
            .editAppointment(data, { doctorId, medicalRecordId })
            .pipe(
              map((response: any) =>
                MainActions.medicalAppointmentSuccess({ appointment: response })
              ),
              catchError((error) =>
                of(MainActions.medicalAppointmentFailed({ payload: error }))
              )
            ),
          of(RootActions.loadingFinished())
        )
      )
    )
  );
}
