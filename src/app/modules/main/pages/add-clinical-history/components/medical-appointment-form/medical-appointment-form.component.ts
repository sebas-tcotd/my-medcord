import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-medical-appointment-form',
  templateUrl: './medical-appointment-form.component.html',
  styles: [],
})
export class MedicalAppointmentFormComponent implements OnInit, OnDestroy {
  @Output() formEmitter: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

  private paramsSubs!: Subscription;
  public medicalAppointmentForm!: FormGroup;
  public rows: number = 30;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setupForm();
    this.setMedicalId();
  }
  ngOnDestroy(): void {
    this.paramsSubs.unsubscribe();
  }

  private setupForm(): void {
    this.medicalAppointmentForm = this.fb.group({
      id: [{ value: '', disabled: true }, Validators.required],
      analysis: ['', Validators.required],
      diagnostic: ['', Validators.required],
      medicines: ['', Validators.required],
    });
  }

  private setMedicalId() {
    this.paramsSubs = this.route.params.subscribe((params) => {
      this.medicalAppointmentForm.get('id')?.patchValue(params['id']);
    });
  }

  public createMedicalAppointment() {
    if (this.medicalAppointmentForm.valid) {
      this.formEmitter.emit(this.medicalAppointmentForm);
    }
  }
}
