import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-drupal-details',
  templateUrl: './drupal-details.component.html',
  styleUrls: ['./drupal-details.component.scss'],
})
export class DrupalDetailsComponent implements OnInit {
  id: any;
  DrupalDataList: any = [];
  constructor(private activate: ActivatedRoute, private category: CategoriesService) {
    let sub = this.activate.params.subscribe(params => {
      this.id = params['id'];
      this.DrupalDataList=params;
    })
  }

  ngOnInit() {
  }

}
