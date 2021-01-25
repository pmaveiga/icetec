import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  message = '';

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (!this.email || !this.password) {
      this.message = 'Email and password are required';
      return;
    }

    this.service.authenticate({email: this.email, password: this.password}).subscribe((response) => {
      sessionStorage.setItem('token', response.token);
      this.router.navigate(['/applicant']);
    }, error => this.message = error.error.error || 'Connection refused');
  }
}
