import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

public columns = ['id','title','text'];
public rows : Array<Article>;

constructor(public apiService: ApiService , public router : Router) { }


ngOnInit() {
    this.apiService.get("articles").subscribe((data : Article[])=>{
    console.log(data);
    this.rows = data;
    });
  }

  public delete(id:string){

    console.log("delete : " + id);
    var path = 'articles/' + id;
    this.apiService.delete(path).subscribe((r)=>{

    this.rows = this.rows.filter((p,i)=>{

        if(Number(id) === p.id )
        {
        return false;
        }
        return true;
    },this.rows)

    });

}
public update(id:string){
    console.log("update : " + id );
    this.router.navigateByUrl('/articles/add/' + id);
}
}
