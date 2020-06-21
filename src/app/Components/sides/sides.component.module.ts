import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../slide/slide.component';
import { SlideModule } from '../slide/slide.component.module';
import { SidesComponent } from './sides.component';
import { SidesRoutingModule } from './sides.component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidesRoutingModule,
    SlideModule
  ],
  declarations: [SidesComponent],
  exports:[],
})
export class SidesModule {}
