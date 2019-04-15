import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';
  constructor(private tokenService: Angular2TokenService){
    this.tokenService.init({
      registerAccountPath: 'http://localhost:3000/auth'
    });

    this.tokenService.registerAccount({email: 'user@example.com', password: 'alexis123', passwordConfirmation: 'alexis123'}).subscribe(

        res => {

          console.log('auth response:', res);
          console.log('auth response headers: ', res.headers.toJSON()); //log the response header to show the auth token
          console.log('auth response body:', res.json()); //log the response body to show the user
        },

        err => {
          console.error('auth error:', err);
        }
    )
  }
}
