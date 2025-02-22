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
    name: 'Manan Chorwadi',
    age: 21,
    email: 'mananchorwadi11@gmail.comm'
  };

}
