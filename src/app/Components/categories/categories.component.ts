import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  CategoryList: any = [];

  constructor(private category: CategoriesService, private navCtrl: NavController) { }

  ngOnInit() {
    this.category.getDatas().subscribe((data: any) => {
      this.CategoryList = data;
    })


  }
  onAppetizers() {
    this.navCtrl.navigateForward('/appetizers');
  }
  onSalads() {
    this.navCtrl.navigateForward('/salads');

  }

  onMainCourse() {
    this.navCtrl.navigateForward('/main-course');

  }
  onDeserts() {
    this.navCtrl.navigateForward('/deserts');

  }
  onSides() {
    this.navCtrl.navigateForward('/sides');

  }
}
