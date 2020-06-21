import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NewsRoutingModule } from './news.component-routing.module';
import { NewsComponent } from './news.component';
import { SlideModule } from '../../slide/slide.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsRoutingModule,
    SlideModule
  ],
  declarations: [NewsComponent],
  exports:[],
})
export class NewsModule {}
