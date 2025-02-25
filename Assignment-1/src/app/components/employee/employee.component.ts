
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees = [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT', status: 'Active' },
    { id: 2, name: 'Jane Smith', position: 'Designer', department: 'UI/UX', status: 'Active' },
    { id: 3, name: 'Mike Johnson', position: 'Manager', department: 'HR', status: 'On Leave' }
  ];

  addEmployee() {
    console.log('Add employee clicked');
    // Add implementation here
  }

  editEmployee(id: number) {
    console.log('Edit employee:', id);
    // Add implementation here
  }

  deleteEmployee(id: number) {
    console.log('Delete employee:', id);
    // Add implementation here
  }
}