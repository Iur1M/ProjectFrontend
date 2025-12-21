import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
firstName = '';
  lastName = '';
  email = '';
  password = '';
  gender = '';

  constructor(private auth: AuthService) {}

  register() {
    this.auth.register({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      gender: this.gender
    }).subscribe(res => {
      console.log(res);
    });
  }
}
