import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 email = '';
  password = '';

  constructor(private auth: AuthService) {}

  login() {
    this.auth.login({
      email: this.email,
      password: this.password,
    }).subscribe(res => {
      console.log(res);
    });
  }
}

