import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  loginForm: FormGroup;
  isLoggedIn = false;

  constructor(private fb: FormBuilder, private router:Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (username === 'admin' && password === 'admin123') {
        this.isLoggedIn = true;
        console.log('Login successful!');
        this.router.navigate(['/user', { username: username }]);
      } else {
        alert('Invalid credentials');
      }
    } 
  }

  logout() {
    this.isLoggedIn = false;
    this.loginForm.reset();
  }
}