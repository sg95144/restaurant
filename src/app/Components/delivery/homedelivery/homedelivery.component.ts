import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';
declare var Razorpay: any;

@Component({
  selector: 'app-homedelivery',
  templateUrl: './homedelivery.component.html',
  styleUrls: ['./homedelivery.component.scss'],
})
export class HomedeliveryComponent implements OnInit {
  HomeDeliveryForm: FormGroup;
  constructor(private fb: FormBuilder, private toastController: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
    this.HomeDeliveryForm = this.fb.group({
      firstname: ['Satish', Validators.required],
      lastname: ['Gupta', Validators.required],
      phone: ['9898031481', Validators.required],
      email: ['sg95144@gmail.com', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      zip: ['380026', Validators.required],
      city: ['Ahmedabad', Validators.required],
      country: ['Gujarat', Validators.required],
    })
  }
  async onSubmit(data) {
    localStorage.setItem('order', JSON.stringify(data));
    const options = {
      key: 'rzp_test_7uz0fpp603h0XN',
      amount: localStorage.getItem("totalprice") + "00",
      name: 'Merchant Name',
      description: 'Purchase Description',
      prefile: {
        name: data.firstname + data.lastname,
        email: data.email
      },
      notes: {
        address: data.address
      },
      theme: {
        color: 'green'
      },
      handler: this.paymentResponseHander.bind(this)
    };

    const rzp = new Razorpay(options);
    console.log(rzp)
    rzp.open();
    
    const toast = await this.toastController.create({
      color: 'light',
      duration: 2000,
      message: 'You Ordered Successfull!!',
    });
    await toast.present();
    this.navCtrl.navigateForward('/home');
  }
  paymentResponseHander(response) {
    console.log(response)
   console.log(response.razorpay_payment_id);
   }
}
