import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  admin = {
    name: "Harekrushn vaghasiya",
    role:"Administrator",
    permissions : ["Manage Users","Edit Content","View Reports"]
  };
}
