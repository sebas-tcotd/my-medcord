import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenderEnum } from '../../../../../../core/enums/gender.enum';

@Component({
  selector: 'app-history-form',
  templateUrl: './history-form.component.html',
  styles: [],
})
export class HistoryFormComponent implements OnInit {
  public clinicalHistoryForm!: FormGroup;
  public GenderEnum = GenderEnum;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm(): void {
    this.clinicalHistoryForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: ['', Validators.required],
      dni: ['', Validators.required],
      birthDate: ['', Validators.required],
      birthPlace: ['', Validators.required],
      nationality: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
    });
  }

  public createClinicalHistory() {}
}
