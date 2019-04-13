import { Component } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'auth-links',
  template: `
    <div class="ui form">
      <div class="fields">
        <div class="fields">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" routerLink="/login" routerLinkActive="active" *ngIf="isLoggedOut()">Login</button>
        </div>
        <div class="field">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" routerLink="/signup" routerLinkActive="active" *ngIf="isLoggedOut()">Sign Up</button>
        </div>
        <div class="field">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" routerLink="/logout" (click)="logOut()" *ngIf="isLoggedIn()">Logout</button>
        </div>

      </div>
    </div>
  `
})
export class AuthLinksComponent {
  constructor(private authService: AuthenticationService) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isLoggedOut(): boolean {
    return !this.authService.isLoggedIn();
  }

  logOut(): void {
    this.authService.logOut();
  }

}
