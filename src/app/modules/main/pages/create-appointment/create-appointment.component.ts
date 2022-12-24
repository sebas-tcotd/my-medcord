import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MainFeatureState } from '../../state/main.reducer';
import { medicalAppointmentCreation } from '../../state/actions/medical-appointment.actions';
import { Appointment } from '../../../../core/models/appointment.model';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: [],
})
export class CreateAppointmentComponent implements OnInit {
  constructor(private readonly store: Store<MainFeatureState>) {}

  ngOnInit(): void {}

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
