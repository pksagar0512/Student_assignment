
import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'user', component: UserComponent },
];