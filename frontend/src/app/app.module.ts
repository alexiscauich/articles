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
import { MaterializeModule } from 'angular2-materialize';

import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleAddComponent,
    ArticleListComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent

  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
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
