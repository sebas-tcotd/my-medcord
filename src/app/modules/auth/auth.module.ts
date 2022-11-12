import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent, VerificationCodeComponent],
  imports: [AuthRoutingModule, CommonModule, ReactiveFormsModule],
})
export class AuthModule {}
