
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      role: 'Student',
      course: 'Computer Science',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Emma Wilson',
      email: 'emma@example.com',
      role: 'Student',
      course: 'Data Science',
      status: 'Inactive'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael@example.com',
      role: 'Student',
      course: 'Web Development',
      status: 'Active'
    }
  ];

  viewUser(id: number) {
    console.log('View user:', id);
  }

  editUser(id: number) {
    console.log('Edit user:', id);
  }

  deleteUser(id: number) {
    console.log('Delete user:', id);
  }
}