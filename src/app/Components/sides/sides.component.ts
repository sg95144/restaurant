import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.scss'],
})
export class SidesComponent implements OnInit {
  SidesList: any = [];
  constructor(private category: CategoriesService, private route: Router) { }

  ngOnInit() {
    this.category.getSides().subscribe((data: any) => {
      this.SidesList = data.sides;
    })
  }
  onProduct(id, data) {
    this.route.navigate(['/products', id, data]);
  }
}
