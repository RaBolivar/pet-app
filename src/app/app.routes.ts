import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: 'users', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent}
];
