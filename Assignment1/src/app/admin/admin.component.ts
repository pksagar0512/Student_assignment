import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  adminName: string = 'Sarah Connor';
  adminRole: string = 'System Administrator';
  adminSince: string = 'January 1, 2018';
}