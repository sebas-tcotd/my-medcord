import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [],
})
export class UserFormComponent implements OnInit {
  protected addUserForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm() {
    this.addUserForm = this.fb.group({
      surname: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      role: ['', Validators.required],
      permission: ['', Validators.required],
      signatureAndStamp: ['', Validators.required],
    });
  }
}
