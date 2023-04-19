import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.css'],
})
export class NavVarComponent {
  constructor(private authService: AuthService, private route: Router) {}

  logout() {
    this.authService.logout();
    this.route.navigateByUrl('/login');
  }
}
