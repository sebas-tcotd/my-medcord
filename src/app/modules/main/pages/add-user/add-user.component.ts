import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as MainActions from '../../state/actions';

import { MainFeatureState } from '../../state/main.reducer';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  constructor(private readonly store: Store<MainFeatureState>) {}

  public handleForm(form: FormGroup) {
    console.log(form.value);
    this.store.dispatch(MainActions.userAddition({ payload: form.value }));
  }
}
