import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MainFeatureState } from '../../state/main.reducer';
import { selectLoggedUserId } from '../../state/selectors/users-registry.selectors';
import {
  medicalAppointmentLoad,
  medicalAppointmentUpdate,
} from '../../state/actions/medical-appointment.actions';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MedicalMetadata } from '../../../../core/models/medical-metadata.model';

@Component({
  selector: 'app-add-clinical-history',
  templateUrl: './add-clinical-history.component.html',
  styles: [],
})
export class AddClinicalHistoryComponent implements OnInit, OnDestroy {
  private loggedUserIdSubs!: Subscription;

  constructor(
    private readonly store: Store<MainFeatureState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCurrentAppointment();
  }
  ngOnDestroy(): void {
    this.loggedUserIdSubs.unsubscribe();
  }

  private getCurrentAppointment() {
    const medicalRecordId = this.route.snapshot.params['id'];
    this.loggedUserIdSubs = this.store
      .select(selectLoggedUserId)
      .subscribe((id) => {
        if (id) {
          this.store.dispatch(
            medicalAppointmentLoad({
              medicalRecordId,
              doctorId: id,
            })
          );
        }
      });
  }

  public handleForm(form: FormGroup) {
    const medicalRecordId = form.get('id')?.value;
    const completeForm: MedicalMetadata = {
      ...form.value,
    };

    this.loggedUserIdSubs = this.store
      .select(selectLoggedUserId)
      .subscribe((id) => {
        if (id) {
          this.store.dispatch(
            medicalAppointmentUpdate({
              data: completeForm,
              doctorId: id,
              medicalRecordId,
            })
          );
        }
      });
  }
}
