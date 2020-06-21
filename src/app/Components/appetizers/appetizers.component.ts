import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.scss'],
})
export class AppetizersComponent implements OnInit {
  ApptizersList: any = [];
  constructor(private category: CategoriesService, private route:Router) { }

  ngOnInit() {
    this.category.getAppetizers().subscribe((data: any) => {
      this.ApptizersList = data.appetizers;
    })
  }
  onAppetizers(id,list){    
    this.route.navigate(['/products',id,list])
  }
}
