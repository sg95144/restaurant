import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  PostList:any=[];
  constructor(private category:CategoriesService, private route:Router) { }

  ngOnInit() {
    this.category.getAppetizers().subscribe((result:any)=>{
      this.PostList=result.posts;
    })
  }

  onPosts(id,data){
    this.route.navigate(['posts-details',id,data])
  }
}
