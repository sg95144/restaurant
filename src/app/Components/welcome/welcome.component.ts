import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  constructor(private navCtrl: NavController,
    private fire: AngularFireAuth
  ) { }

  ngOnInit() { 


  }
  onHome() {
    this.navCtrl.navigateForward('/home');
    localStorage.removeItem("facebook");
    localStorage.removeItem("google");

  }

  loginWithFacebook() {
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        localStorage.setItem("response", JSON.stringify(res));

        localStorage.setItem("facebook", JSON.stringify(res.user));
        this.navCtrl.navigateForward('home');
      })
  }

  onLoginWithgoogle() {
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        localStorage.setItem("response", JSON.stringify(res));

        localStorage.setItem("google", JSON.stringify(res.user));
        this.navCtrl.navigateForward('home');


      })
  }

}
