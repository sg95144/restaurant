import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule } from './home.component-routing.module';
import { HomeComponent } from './home.component';
import { SlideComponent } from '../slide/slide.component';
import { SlideModule } from '../slide/slide.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    SlideModule,
    SlideModule,
    
  ],
  declarations: [HomeComponent],
  exports:[],
})
export class HomeModule {}
