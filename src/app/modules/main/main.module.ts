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
import { mainReducers, metaReducers } from './state/main.reducer';
import { ClinicalHistoryComponent } from './pages/clinical-history/clinical-history.component';
import { AddHistoryComponent } from './pages/add-history/add-history.component';
import { HistoryFormComponent } from './pages/add-history/components/history-form/history-form.component';
import { EffectsModule } from '@ngrx/effects';
import { MainEffectsArray } from './state/effects';
import { AddClinicalHistoryComponent } from './pages/add-clinical-history/add-clinical-history.component';
import { MedicalAppointmentFormComponent } from './pages/add-clinical-history/components/medical-appointment-form/medical-appointment-form.component';
import { CreateAppointmentComponent } from './pages/create-appointment/create-appointment.component';
import { AppointmentFormComponent } from './pages/create-appointment/components/appointment-form/appointment-form.component';

@NgModule({
  declarations: [
    MainComponent,
    UsersComponent,
    ProfileComponent,
    AddUserComponent,
    UserFormComponent,
    ClinicalHistoryComponent,
    AddHistoryComponent,
    HistoryFormComponent,
    AddClinicalHistoryComponent,
    MedicalAppointmentFormComponent,
    CreateAppointmentComponent,
    AppointmentFormComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(FeaturesEnum.MAIN, mainReducers, { metaReducers }),
    EffectsModule.forFeature(MainEffectsArray),
  ],
})
export class MainModule {}
