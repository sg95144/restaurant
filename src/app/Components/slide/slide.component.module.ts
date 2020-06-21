import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SlideComponent } from './slide.component';
import { SlideRoutingModule } from './slide.component-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlideRoutingModule
  ],
  declarations: [SlideComponent],
  exports:[SlideComponent]
})
export class SlideModule {}
