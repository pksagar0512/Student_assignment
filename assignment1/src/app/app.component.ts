import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { UserComponent } from './component/user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AdminComponent,EmployeeComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment1';
}
