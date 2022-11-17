import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { LocalStorageKeyEnum } from '../../core/enums/localStorage-key.enum';
import { UsersService } from '../../core/services/users.service';
import * as authActions from '../actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  public login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginAttempted),
      mergeMap(({ email, password }) =>
        this.usersService.login({ email, password }).pipe(
          tap(({ access_token }) =>
            localStorage.setItem(LocalStorageKeyEnum.TOKEN, access_token)
          ),
          map((response) =>
            authActions.loginSuccessful({
              user: response.user,
              accessToken: response.access_token,
            })
          ),
          catchError((err) => of(authActions.loginFailed({ payload: err })))
        )
      )
    )
  );
}
