import { Component } from '@angular/core';
import { AuthService } from './core/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'icetec';

  constructor(private authService: AuthService) {
  }

  isLogged = () => sessionStorage.getItem('token') != null;

  logout(): void {
    this.authService.logout();
  }
}
