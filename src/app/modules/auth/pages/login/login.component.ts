import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Login } from '../../../../core/interfaces/login.interface';
import { loginAttempted } from '../../../../store/actions';

import { MainFeatureState } from '../../../main/state/main.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  constructor(private readonly store: Store<MainFeatureState>) {}

  public handleLoginFormData({ email, password }: Login) {
    this.store.dispatch(loginAttempted({ email, password }));
  }
}
