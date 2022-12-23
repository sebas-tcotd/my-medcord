import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concat, concatMap, map, of, switchMap, take } from 'rxjs';
import { UsersService } from '../../../../core/services/users.service';

import * as MainActions from '../actions';
import * as RootActions from '../../../../store/actions';

@Injectable()
export class UsersRegistryEffects {
  constructor(private actions: Actions, private usersService: UsersService) {}

  public users$ = createEffect(() =>
    this.actions.pipe(
      ofType(MainActions.usersLoad),
      switchMap(() =>
        this.usersService.getUsers().pipe(
          map(({ users }) => MainActions.loadUsersSuccessful({ users })),
          catchError((error) =>
            of(MainActions.loadUsersError({ payload: error }))
          )
        )
      )
    )
  );

  public addUser$ = createEffect(() =>
    this.actions.pipe(
      ofType(MainActions.userAddition),
      concatMap((action) =>
        concat(
          of(RootActions.loadingStarted()),
          this.usersService.addUserToRegistry(action.payload).pipe(
            map(() => MainActions.userAdditionSuccess()),
            catchError((error) =>
              of(MainActions.userAdditionFail({ payload: error }))
            )
          ),
          of(RootActions.loadingFinished())
        )
      )
    )
  );

  public addUserSuccess$ = createEffect(() =>
    this.actions.pipe(
      ofType(MainActions.loadUsersSuccessful),
      take(1),
      map(() => MainActions.usersLoad())
    )
  );
}
