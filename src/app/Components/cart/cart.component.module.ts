import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SlideModule } from '../slide/slide.component.module';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart.component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartRoutingModule,
    SlideModule
  ],
  declarations: [CartComponent],
  exports:[],
})
export class CartModule {}
