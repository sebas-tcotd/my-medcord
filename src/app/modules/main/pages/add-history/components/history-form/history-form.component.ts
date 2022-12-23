import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenderEnum } from '../../../../../../core/enums/gender.enum';
import { NationalityEnum } from '../../../../../../core/enums/nationality.enum';

@Component({
  selector: 'app-history-form',
  templateUrl: './history-form.component.html',
  styles: [],
})
export class HistoryFormComponent implements OnInit {
  @Output() formEmitter: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

  public clinicalHistoryForm!: FormGroup;
  public GenderEnum = GenderEnum;
  public NationalityEnum = NationalityEnum;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm(): void {
    this.clinicalHistoryForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dni: ['', Validators.required],
      birthdate: ['', Validators.required],
      birthplace: ['', Validators.required],
      nationality: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
    });
  }

  public createClinicalHistory() {
    if (this.clinicalHistoryForm.valid) {
      this.formEmitter.emit(this.clinicalHistoryForm);
    }
  }
}
