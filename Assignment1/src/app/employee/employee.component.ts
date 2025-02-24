import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeName: string = 'Alice Johnson';
  jobTitle: string = 'Senior Developer';
  departmentName: string = 'Engineering';
  hireDate: string = 'March 15, 2020';
}