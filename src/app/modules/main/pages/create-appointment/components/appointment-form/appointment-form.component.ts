import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SpecialtyEnum } from '../../../../../../core/enums/specialty.enum';
import { MainFeatureState } from '../../../../state/main.reducer';
import { loadDoctors } from '../../../../state/actions/medical-appointment.actions';
import { Doctor } from '../../../../../../core/models/doctor.model';
import { selectDoctor } from '../../../../state/selectors/doctors.selectors';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styles: [],
})
export class AppointmentFormComponent implements OnInit, OnDestroy {
  @Output() formEmitter: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

  private paramsSubs!: Subscription;
  public appointmentForm!: FormGroup;
  public SpecialityEnum = SpecialtyEnum;
  public doctors$!: Observable<Doctor[] | null>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private readonly store: Store<MainFeatureState>
  ) {}

  ngOnInit(): void {
    this.setupForm();
    this.setMedicalId();
    this.getDoctors();
  }
  ngOnDestroy(): void {
    this.paramsSubs.unsubscribe();
  }

  private setMedicalId() {
    this.paramsSubs = this.route.params.subscribe((params) => {
      this.appointmentForm.get('id')?.patchValue(params['id']);
    });
  }

  private setupForm(): void {
    this.appointmentForm = this.fb.group({
      id: [{ value: '', disabled: true }, Validators.required],
      specialty: ['', Validators.required],
      doctorEmail: ['', Validators.required],
      date: ['', Validators.required],
      hour: ['', Validators.required],
    });
  }

  private getDoctors() {
    this.store.dispatch(loadDoctors());
    this.doctors$ = this.store.select(selectDoctor);
  }

  public submitForm() {
    if (this.appointmentForm.valid) {
      this.formEmitter.emit(this.appointmentForm);
    }
  }
}
