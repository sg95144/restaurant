import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  User: any;
  constructor(private navCtrl: NavController, private router: Router) {

  }

  ngOnInit() {
    if (localStorage.getItem("response") == null) {

    }
    else {
      let t = JSON.parse(localStorage.getItem("response"));
      if (t.additionalUserInfo.providerId == "facebook.com") {
        this.User = JSON.parse(localStorage.getItem("facebook"));
      }
      else if ((t.additionalUserInfo.providerId == "google.com")) {
        this.User = JSON.parse(localStorage.getItem("google"))
      }
    }


  }


  onHome() {
    this.navCtrl.navigateForward('/home');
  }
  onCategories() {
    this.navCtrl.navigateForward('/categories');

  }

  onFavorites() {
    this.navCtrl.navigateForward('/favorites');

  }

  onCart() {
    this.navCtrl.navigateForward('/cart');

  }
  onAppetizers() {
    this.navCtrl.navigateForward('/appetizers');

  }
  onSalads() {
    this.navCtrl.navigateForward('/salads');

  }
  onSides() {
    this.navCtrl.navigateForward('/sides');

  }
  onDesserts() {
    this.navCtrl.navigateForward('/deserts');

  }
  onMainCourse() {
    this.navCtrl.navigateForward('/main-course');

  }
  onArticles() {
    this.navCtrl.navigateForward('/articles');

  }

  onWordpress() {
    this.navCtrl.navigateForward('/word-press');

  }


  onDrupal() {
    this.navCtrl.navigateForward('/drupal');

  }

  onEvents() {
    this.navCtrl.navigateForward('/events');

  }
  onAlbums() {
    this.navCtrl.navigateForward('/albums');

  }
  onPosts() {
    this.navCtrl.navigateForward('/posts');

  }
  onContact() {
    this.navCtrl.navigateForward('/contact-us');

  }
  onMap() {
    this.navCtrl.navigateForward('/map');

  }
  onProfile() {
    this.navCtrl.navigateForward('/user-profile');
  }
}
