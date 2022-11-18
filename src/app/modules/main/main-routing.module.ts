import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ClinicalHistoryComponent } from './pages/clinical-history/clinical-history.component';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'My Medcord',
    children: [
      {
        path: 'addUser',
        component: AddUserComponent,
        title: 'Agregar usuario',
      },
      {
        path: 'clinical-history',
        component: ClinicalHistoryComponent,
        title: 'Historias clínicas',
      },
      { path: 'profile', component: ProfileComponent, title: 'Perfil' },
      { path: 'users', component: UsersComponent, title: 'Usuarios' },
      { path: '**', redirectTo: 'users', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
