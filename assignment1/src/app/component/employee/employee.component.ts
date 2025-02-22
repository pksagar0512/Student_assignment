import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employee = {
    name:'Harekrushn vaghasiya',
    position:'full Stack Developer',
    department:'Development'
  };
}
