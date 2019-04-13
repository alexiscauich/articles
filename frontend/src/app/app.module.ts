import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Angular2TokenService } from 'angular2-token';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { AccountComponent } from './account/account.component';
import { HttpModule } from '@angular/http'
import { AuthLinksComponent } from './authentication/auth-links.component';
import { AuthenticationModule } from './authentication/authentication.module';


@NgModule({
  declarations: [
    AppComponent,
    ArticleAddComponent,
    ArticleListComponent,
    AccountComponent,
    AuthLinksComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AuthenticationModule,
    RouterModule.forRoot([
      {
        path: 'articles',
        component: ArticleListComponent
      },
      {
        path: 'articles/add',
        component: ArticleAddComponent
      },
      {
        path: 'articles/add/:id',
        component: ArticleAddComponent
      },
    ])
  ],
  providers: [
    ApiService,
    Angular2TokenService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
