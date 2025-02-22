import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true, // ✅ Must be standalone
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userEmail: string = 'jane.smith@example.com'; // ✅ Define userEmail
}
