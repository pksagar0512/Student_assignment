import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userName: string = 'john_lee';
  userEmail: string = 'john.lee@example.com';
  userStatus: string = 'Active';
}