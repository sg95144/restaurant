import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss'],
})
export class DessertsComponent implements OnInit {
  DesertList: any = [];
  constructor(private category: CategoriesService, private route: Router) { }

  ngOnInit() {
    this.category.getdeserts().subscribe((data: any) => {
      this.DesertList = data.deserts;
    })
  }
  onProduct(id, data) {
    this.route.navigate(['/products', id, data]);
  }
}
