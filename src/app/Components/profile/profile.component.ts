import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  record:any;
  constructor(private fire:AngularFireAuth,private navctrl:NavController) { }

  ngOnInit() {
    let t=JSON.parse(localStorage.getItem("response"));
    if(t.additionalUserInfo.providerId=="facebook.com"){
      this.record=JSON.parse(localStorage.getItem("facebook"));
    }
    else{
      this.record = JSON.parse(localStorage.getItem("google"))
    }
  }
  onLogout(){
    this.fire.auth.signOut();
    this.navctrl.navigateForward('welcome');
    localStorage.removeItem("google");
    localStorage.removeItem("facebook");

  }
}
