import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlideModule } from '../slide/slide.component.module';
import { SaladsComponent } from './salads.component';
import { SaladsRoutingModule } from './salads.component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaladsRoutingModule,
    SlideModule
  ],
  declarations: [SaladsComponent],
  exports:[],
})
export class SaladsModule {}
