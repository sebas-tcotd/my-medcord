import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MainFeatureState } from '../../state/main.reducer';
import * as MainActions from '../../state/actions';

@Component({
  selector: 'app-add-history',
  templateUrl: './add-history.component.html',
  styleUrls: ['./add-history.component.scss'],
})
export class AddHistoryComponent {
  constructor(private readonly store: Store<MainFeatureState>) {}

  handleForm(form: FormGroup) {
    this.store.dispatch(
      MainActions.medicalRecordCreation({ payload: form.value })
    );
  }
}
