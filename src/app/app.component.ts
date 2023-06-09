import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'poke-api-ngrx';
  constructor(public authService: AuthService) {
    var favArray: Number[] = [];
    sessionStorage.setItem('fav', JSON.stringify(favArray));
  }
}
