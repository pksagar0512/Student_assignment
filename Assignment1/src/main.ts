import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { EmployeeComponent } from './app/employee/employee.component';
import { UserComponent } from './app/user/user.component';
import { AdminComponent } from './app/admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeComponent, UserComponent, AdminComponent],
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class App {
}

bootstrapApplication(App);