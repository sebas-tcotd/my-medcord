import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { FeaturesEnum } from '../../core/enums/features.enum';
import { SharedModule } from '../../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UserFormComponent } from './pages/add-user/components/user-form.component';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';
import { mainReducers } from './state/main.reducer';
import { ClinicalHistoryComponent } from './pages/clinical-history/clinical-history.component';

@NgModule({
  declarations: [
    MainComponent,
    UsersComponent,
    ProfileComponent,
    AddUserComponent,
    UserFormComponent,
    ClinicalHistoryComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(FeaturesEnum.MAIN, mainReducers),
  ],
})
export class MainModule {}
