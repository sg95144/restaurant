import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { Router } from '@angular/router';
import { DrupalDetailsComponent } from './drupal-details/drupal-details.component';

@Component({
  selector: 'app-drupal',
  templateUrl: './drupal.component.html',
  styleUrls: ['./drupal.component.scss'],
})
export class DrupalComponent implements OnInit {
  DrupalDataList: any = [];
  constructor(private category: CategoriesService, private router: Router) { }

  ngOnInit() {
    this.category.getDrupaldata().subscribe((result: any) => {
      this.DrupalDataList = result.drupal;
    })
  }
  onDrupaldetails(id,data) {
    this.router.navigate(['/drupal-details', id,data])
  }
}
