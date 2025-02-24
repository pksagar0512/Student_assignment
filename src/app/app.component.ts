import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { UserComponent } from './user/user.component';
// import { EmployeeComponent } from './employee/employee.component';
// import { AdminComponent } from './admin/admin.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MyFirstApp';
}
