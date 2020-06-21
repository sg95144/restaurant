import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  FavoriteList: any = [];
  constructor(private route: Router, private toastController: ToastController) {

  }

  ngOnInit() {
    let test = localStorage.getItem('favorite');

    if (test == null) {

    }
    else {
      this.FavoriteList = JSON.parse(localStorage.getItem('favorite'))
    }
  }

  onGOTODATA(id, data) {
    this.route.navigate(['/products', id, data]);
  }
  async onRemove(id) {
    this.FavoriteList.splice(id, 1);
    localStorage.setItem('favorite', JSON.stringify(this.FavoriteList));

    const toast = await this.toastController.create({
      color: 'light',
      duration: 2000,
      message: 'Item removed from Favotite',
    });
    await toast.present();

  }
  doRefresh(event) {
    setTimeout(()=>{
      event.target.complete();
    },2000);
   
    this.ngOnInit();
  }
}
