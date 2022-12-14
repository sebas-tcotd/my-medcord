import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss'],
})
export class VerificationCodeComponent implements OnInit {
  @Output() verificationCodeEmitter = new EventEmitter<string>();

  public verificationForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm() {
    this.verificationForm = this.fb.group({
      digitOne: ['', Validators.required],
      digitTwo: ['', Validators.required],
      digitThree: ['', Validators.required],
      digitFour: ['', Validators.required],
    });
  }

  public sendVerification() {
    let verificationCode: string = '';

    if (this.verificationForm.valid) {
      Object.values(this.verificationForm.value).forEach((e: any) => {
        verificationCode += e.toString();
      });
      this.verificationCodeEmitter.emit(verificationCode);
      this.router.navigate(['/users']);
    }
  }
}
