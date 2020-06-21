import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {}

  onHomeDelivery(){
this.navCtrl.navigateForward('/checkout-home');
  }
  onTakeAway(){
    this.navCtrl.navigateForward('/checkout-takeaway');

  }
  onDineIn(){
    this.navCtrl.navigateForward('/checkout-dinein');

  }
}
