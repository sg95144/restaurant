import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  List: any = [];
  constructor(private category: CategoriesService,private navCtrl:NavController,private route:Router) { }

  ngOnInit() { }

  onSalads(title) {
    this.category.getAppetizers().subscribe((data: any) => {
      this.List = data.salads;
      localStorage.setItem('albums',JSON.stringify(this.List));
      this.navCtrl.navigateForward('album-details',{queryParams:{title:title}})
    })
  }
  onSides(title){
    this.category.getAppetizers().subscribe((data: any) => {
      this.List = data.sides;
      localStorage.setItem('albums',JSON.stringify(this.List));
      this.navCtrl.navigateForward('album-details',{queryParams:{title:title}})
    })
  }
  onMainCourse(title){
    this.category.getAppetizers().subscribe((data: any) => {
      this.List = data.maincourse;
      localStorage.setItem('albums',JSON.stringify(this.List));
      this.navCtrl.navigateForward('album-details',{queryParams:{title:title}})
    })
  }
  onAppetizers(title){
    this.category.getAppetizers().subscribe((data: any) => {
      this.List = data.appetizers;
      localStorage.setItem('albums',JSON.stringify(this.List));
      this.navCtrl.navigateForward('album-details',{queryParams:{title:title}})
    })
  }
  onDeserts(title){
    this.category.getAppetizers().subscribe((data: any) => {
      this.List = data.deserts;
      localStorage.setItem('albums',JSON.stringify(this.List));
      this.navCtrl.navigateForward('album-details',{queryParams:{title:title}})
    })
  }
  onExtraOne(title){
    this.category.getAppetizers().subscribe((data: any) => {
      this.List = data.extra1;
      localStorage.setItem('albums',JSON.stringify(this.List));
      this.navCtrl.navigateForward('album-details',{queryParams:{title:title}})
    }) 
  }
  onExtraTwo(title){
    this.category.getAppetizers().subscribe((data: any) => {
      this.List = data.extra2;
      localStorage.setItem('albums',JSON.stringify(this.List));
      this.navCtrl.navigateForward('album-details',{queryParams:{title:title}})
    }) 
  }
}
