import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  authTokenObs: Observable<string>;
  constructor(private router: Router, private authService: AuthService) {
    console.log('auth service');

    this.authTokenObs = this.authService.authPublic;
  }

  closeSession() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
  ngOnInit(): void {}

  redirectHome() {
    this.router.navigate(['']);
  }

  showLoginPage() {
    this.router.navigate(['auth']);
  }
}
