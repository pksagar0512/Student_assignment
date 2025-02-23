import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Ensure this is a standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [EmployeeComponent, UserComponent, AdminComponent] // ✅ Import child components
})
export class AppComponent {
  title = 'my-angular-app';
}
