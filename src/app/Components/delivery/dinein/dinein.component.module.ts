import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DineinComponent } from './dinein.component';
import { DineInRoutingModule } from './dinein.component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DineInRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DineinComponent],
  exports:[],
})
export class DineInModule {}
