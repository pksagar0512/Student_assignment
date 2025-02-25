
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title = 'Admin Dashboard';
  
  adminData = {
    totalUsers: 100,
    activeUsers: 75,
    pendingRequests: 5
  };
}