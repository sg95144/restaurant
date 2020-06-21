import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
    constructor(private navCtrl: NavController, public menuController: MenuController,
      
      ) { }

  ngOnInit() {
  
  }
  onAppitizer() {
    this.navCtrl.navigateForward('/appetizers');
  }

  onSalads() {
    this.navCtrl.navigateForward('/salads');

  }
  onSides() {
    this.navCtrl.navigateForward('/sides');

  }
  onDeserts() {
    this.navCtrl.navigateForward('/deserts');

  }
  onMaincourse() {
    this.navCtrl.navigateForward('/main-course');

  }

  onContact() {
    this.navCtrl.navigateForward('/contact-us');

  }
  onMap() {
    this.navCtrl.navigateForward('/map');

  }
  // onRefresh() {
  //   window.location.reload();
  // }
  // async Open(){
  //   await this.menuController.open();
  //   this.onRefresh();
  // }
}
