import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../slide/slide.component';
import { SlideModule } from '../slide/slide.component.module';
import { WordpressComponent } from './wordpress.component';
import { WordpressRoutingModule } from './wordpress.component-routing.module';
import { WordpressDetailsComponent } from './wordpress-details/wordpress-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordpressRoutingModule,
    SlideModule
  ],
  declarations: [WordpressComponent],
  exports:[],
})
export class WordpressModule {}
