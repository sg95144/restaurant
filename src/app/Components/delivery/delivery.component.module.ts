import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlideModule } from '../slide/slide.component.module';
import { DeliveryComponent } from './delivery.component';
import { DeliveryRoutingModule } from './delivery.component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryRoutingModule,
    SlideModule
  ],
  declarations: [DeliveryComponent],
  exports:[],
})
export class DeliveryModule {}
