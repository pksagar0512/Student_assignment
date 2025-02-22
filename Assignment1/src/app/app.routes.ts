import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component'; // ✅ Correct


export const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' } // Redirect to admin for testing
];
