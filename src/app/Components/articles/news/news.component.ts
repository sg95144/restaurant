import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  id: any;
  NewsList: any={};
  constructor(private route: ActivatedRoute, private categories: CategoriesService) {
    let sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.NewsList=params;
    });
  }

  ngOnInit(): void {
  }


}
