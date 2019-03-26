import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleAddComponent,
    ArticleListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
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
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
