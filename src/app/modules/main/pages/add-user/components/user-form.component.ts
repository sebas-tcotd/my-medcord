import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenderEnum } from '../../../../../core/enums/gender.enum';
import { RoleEnum } from '../../../../../core/enums/role.enum';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [],
})
export class UserFormComponent implements OnInit {
  @Output() formDataEmitter: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

  public addUserForm!: FormGroup;
  public GenderEnum = GenderEnum;
  public RoleEnum = RoleEnum;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm(): void {
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      role: ['', Validators.required],
      password: ['', Validators.required],
      signatureAndStamp: [''],
    });
  }

  public emitForm(): void {
    if (this.addUserForm.valid) {
      this.formDataEmitter.emit(this.addUserForm);
    }
  }
}
