import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Login } from '../../../../core/interfaces/login.interface';
import { loginAttempted, loadingStarted } from '../../../../store/actions';

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

    // 1. Se recibe la data
    // 2. Se la envía al server ('til they do it)
    // 3. Se cambia al otro componente
    // 4. Se verifica si el código es correcto mandando eso al server
    // 5. Si este es correcto, se redirige al dashboard; si no, se lanza mensaje de error
  }
}
