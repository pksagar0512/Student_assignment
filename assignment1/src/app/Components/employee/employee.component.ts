import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true, // ✅ Must be standalone
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {}
