
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="nav-menu">
      <a routerLink="/admin">Admin Dashboard</a>
      <a routerLink="/employee">Employee Management</a>
      <a routerLink="/user"> User </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .nav-menu {
      background: #333;
      padding: 15px;
      margin-bottom: 20px;
    }
    .nav-menu a {
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      margin-right: 10px;
    }
    .nav-menu a:hover {
      background: #555;
      border-radius: 4px;
    }
  `]
})
export class AppComponent {
  title = 'Assignment1';
}