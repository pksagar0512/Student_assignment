import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true
})
export class UserComponent {
  user = {
    name: 'Shyam kadiwar',
    age: 21,
    email: 'shyamkadiwar@gmail.com'
  };
}
