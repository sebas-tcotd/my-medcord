import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from '../../shared/shared.module';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './pages/add-user/components/user-form.component';



@NgModule({
  declarations: [
    MainComponent,
    UsersComponent,
    ProfileComponent,
    AddUserComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
