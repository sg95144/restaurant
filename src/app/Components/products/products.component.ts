import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  id: any;
  AddtoCart: any = [];
  ProductList: any = [];
  FavoriteList: any = [];
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private activate: ActivatedRoute, private navCtrl: NavController, private toastController: ToastController, private alertController: AlertController) {
    this.activate.params.subscribe((params: []) => {
      this.id = params['id'];
      this.ProductList = params;
    })
  }

  ngOnInit() { }

  async onAddCart(data: {}) {
    let test = localStorage.getItem('users')
    if (test == null) {
      this.AddtoCart.push(data);
      localStorage.setItem('users', JSON.stringify(this.AddtoCart));
    }
    else {
      this.AddtoCart = JSON.parse(localStorage.getItem('users'));
      this.AddtoCart.push(data);
      localStorage.setItem('users', JSON.stringify(this.AddtoCart));
    }
    const toast = await this.toastController.create({
      color: 'light',
      duration: 2000,
      message: 'Item added to cart',
    });
    await toast.present();
  }

  onCart() {
    this.navCtrl.navigateForward('/cart');
  }

  async onAddFavorite(data: {}, title) {
    let test = localStorage.getItem('favorite')
    if (test == null) {
      this.FavoriteList.push(data);
      localStorage.setItem('favorite', JSON.stringify(this.FavoriteList));
     
  
    }
    else {
      this.FavoriteList = JSON.parse(localStorage.getItem('favorite'));
      this.FavoriteList.push(data);
      localStorage.setItem('favorite', JSON.stringify(this.FavoriteList));

 
    }
    const toast = await this.toastController.create({
      color: 'light',
      duration: 2000,
      message: title + 'has been added to favorite',
    });
    await toast.present();
  }





  async onCartConfirmation(data) {

    const alert = await this.alertController.create({
      header: 'Add to cart',
      inputs: [
        {

          type: 'text',
          value: '1',

        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'ADD',
          handler: () => {
            this.onAddCart(data)
          }
        }
      ]
    });
    await alert.present();
  }

} 
