import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { JsonPipe } from '@angular/common';
import { AlertController, ToastController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  CartDetails: any = [];
  pricelist: any;
  totalCost: number = 0;
  constructor(private alertController: AlertController, private toastController: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
    let test = localStorage.getItem('users')
    if (test == null) {

    }
    else {
      this.CartDetails = JSON.parse(localStorage.getItem('users'));
      _.each(this.CartDetails, a => {
        console.log(this.CartDetails)
        this.totalCost += parseFloat(a.price);
        let t=a.price
        let res = t.replace(/\D/g, "")
        console.log(res)

      })
    }

  }
  async onRemoveItem(id) {
    let dtat = this.CartDetails.splice(id, 1);
        let d = _.filter(dtat, (users) => {
      let t = users.price
      this.totalCost -= parseFloat(t)
    })
    localStorage.setItem('users', JSON.stringify(this.CartDetails));
    const toast = await this.toastController.create({
      color: 'light',
      duration: 2000,
      message: 'Item removed from cart',
    });
    await toast.present();
    // this.ngOnInit();
  }

  async onChangeQuantity() {
    const alert = await this.alertController.create({
      header: 'Update Quantity',
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
          }
        }
      ]
    });
    await alert.present();
  }
  onCheckout() {
    this.navCtrl.navigateForward('/checkout');
    localStorage.setItem("totalprice",JSON.stringify(this.totalCost))
  }
  doRefresh(ev){

setTimeout(()=>{
  ev.target.complete();
},2000);
this.totalCost=0;
this.ngOnInit();
  }
}
