import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private tokenService: Angular2TokenService) {
    this.tokenService.init({
      registerAccountPath: 'http://localhost:3000/auth'
    });

  }

  ngOnInit() {
  }

  signUp() {
    this.tokenService.registerAccount({
      email: 'user@example.com',
      password: 'alexis123',
      passwordConfirmation: 'alexis123'
    }).subscribe(
      res => console.log(res),
      error => console.log(error)
    );
  }
}
