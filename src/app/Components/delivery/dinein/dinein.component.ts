import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-dinein',
  templateUrl: './dinein.component.html',
  styleUrls: ['./dinein.component.scss'],
})
export class DineinComponent implements OnInit {
  dineForm: FormGroup;
  constructor(private fb: FormBuilder, private toastController: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
    this.dineForm = this.fb.group({
      tabel: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]

    })
  }
  async onDine(data) {
    localStorage.setItem('dine', JSON.stringify(data));
    const toast = await this.toastController.create({
      color: 'light',
      duration: 2000,
      message: 'You Ordered Successfull!!',
    });
    await toast.present();
    this.navCtrl.navigateForward('/home');
  }
}
