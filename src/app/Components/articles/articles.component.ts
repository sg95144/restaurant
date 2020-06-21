import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  newsList: any = [];
  constructor(private categories: CategoriesService, private router: Router) {

  }

  ngOnInit() {

    this.categories.getNewsList().subscribe((data: any) => {
      this.newsList = data.news;
    })
  }
  onNews(id,data) {
    this.router.navigate(['/articles', id,data]);
  }
}
