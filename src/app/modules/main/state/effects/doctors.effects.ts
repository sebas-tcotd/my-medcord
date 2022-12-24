import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UsersService } from '../../../../core/services/users.service';
import * as MainActions from '../actions';

@Injectable()
export class DoctorsEffects {
  constructor(private actions: Actions, private usersService: UsersService) {}

  public doctors$ = createEffect(() =>
    this.actions.pipe(
      ofType(MainActions.loadDoctors),
      switchMap(() =>
        this.usersService.getDoctors().pipe(
          map((doctors) => MainActions.loadDoctorsSuccess({ doctors })),
          catchError((error) =>
            of(MainActions.loadDoctorsFail({ payload: error }))
          )
        )
      )
    )
  );
}
