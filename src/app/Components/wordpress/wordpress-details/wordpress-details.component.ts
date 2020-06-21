import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-wordpress-details',
  templateUrl: './wordpress-details.component.html',
  styleUrls: ['./wordpress-details.component.scss'],
})
export class WordpressDetailsComponent implements OnInit {
  id: any;
  WordpressData: any = [];
  constructor(private activate: ActivatedRoute, private category: CategoriesService) {
    let sub = this.activate.params.subscribe(params => {
      this.id = params['id'];
      this.WordpressData = params;
    })
  }

  ngOnInit() {

  }

}
