import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Project';
  user: User | null = null;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.auth.logout(this.router);
  }
}
