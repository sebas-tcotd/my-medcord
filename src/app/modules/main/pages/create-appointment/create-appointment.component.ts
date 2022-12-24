import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Appointment } from '../../../../core/models/appointment.model';
import { medicalAppointmentCreation } from '../../state/actions/medical-appointment.actions';
import { MainFeatureState } from '../../state/main.reducer';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: [],
})
export class CreateAppointmentComponent {
  constructor(private readonly store: Store<MainFeatureState>) {}

  handleForm(form: FormGroup) {
    const medicalRecordId = form.get('id')?.value;
    const completeForm: Appointment = {
      ...form.value,
      hour: new Date(),
      medicalRecordId,
    };

    this.store.dispatch(medicalAppointmentCreation({ payload: completeForm }));
  }
}
