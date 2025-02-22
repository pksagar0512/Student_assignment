import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  user = {
    name: 'Harekrushn vaghasiya',
    age: 20,
    email: 'harekrushnvaghasiya@gmail.com'
  };
}
