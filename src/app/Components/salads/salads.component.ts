import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.scss'],
})
export class SaladsComponent implements OnInit {
  getSaladsList: any = [];
  constructor(private category: CategoriesService, private route: Router) { }

  ngOnInit() {

    this.category.getSalads().subscribe((data: any) => {
      this.getSaladsList = data.salads;
    })
  }
  onProductList(id, data) {
    this.route.navigate(['/products', id, data]);
  }
}
