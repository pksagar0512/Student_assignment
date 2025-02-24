import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Mark as a standalone component
  imports: [EmployeeComponent, UserComponent, AdminComponent],  // Import standalone components here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-components-assignment';
}
