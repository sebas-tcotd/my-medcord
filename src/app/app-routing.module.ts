import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthModule } from './modules/auth/auth.module';
import { LoginComponent } from './modules/auth/pages/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    // canLoad: [AuthGuard],
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainModule),
  },
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
