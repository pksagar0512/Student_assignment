import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { AdminComponent } from './component/admin/admin.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, EmployeeComponent, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
