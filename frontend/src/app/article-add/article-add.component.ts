import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {

constructor(public apiService: ApiService , public acRoute : ActivatedRoute) { }

public article: Article  = new Article();

ngOnInit() {
  this.acRoute.params.subscribe((data : any)=>{
    console.log(data.id);
    if(data && data.id){
      this.apiService.get("articles/"+data.id).subscribe((data : Article)=>{
      this.article = data;
    });
  }
  else
    {
      this.article = new Article();
      }
    })
  }

  public onSubmit(){
    console.log("Adding a article: " + this.article.title + this.article.text);
    if(this.article.id){
    this.apiService.update("articles/"+this.article.id, this.article).subscribe((r)=>{
      console.log(r);
      alert("Article updated !");
    })
  }
  else
    this.apiService.post("articles",this.article).subscribe((r)=>{
      console.log(r);
      this.article = new Article();
      alert("Article added !");

  });
}

}
