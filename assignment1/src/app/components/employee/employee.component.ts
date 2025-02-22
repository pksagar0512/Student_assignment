import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  // imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  standalone: true
})
export class EmployeeComponent {
  employee = {
    name:'Manan Chorwadi',
    position:'Full Stack Developer',
    department:'Development'
  };

}
