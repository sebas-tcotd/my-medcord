import { Injectable } from '@angular/core';

import { concat, merge, of } from 'rxjs';
import {
  catchError,
  concatMap,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { LocalStorageKeyEnum } from '../../core/enums/localStorage-key.enum';
import { UsersService } from '../../core/services/users.service';
import * as rootActions from '../actions';
import { LoginErrorResponse } from '../../core/interfaces/login.interface';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private router: Router
  ) {}

  public login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rootActions.loginAttempted),
      concatMap((action) =>
        concat(
          of(rootActions.loadingStarted()),
          this.usersService
            .login({ email: action.email, password: action.password })
            .pipe(
              map((response) =>
                rootActions.loginSuccessful({
                  user: response.user,
                })
              ),
              catchError((err: LoginErrorResponse) =>
                of(rootActions.loginFailed({ payload: err }))
              )
            ),
          of(rootActions.loadingFinished())
        )
      )
    )
  );

  public loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rootActions.loginSuccessful),
      tap((response) => {
        localStorage.setItem(
          LocalStorageKeyEnum.TOKEN,
          response.access_token as string
        );
        this.router.navigateByUrl('/users');
      })
    )
  );
}
