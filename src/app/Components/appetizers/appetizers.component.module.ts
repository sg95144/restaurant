import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../slide/slide.component';
import { SlideModule } from '../slide/slide.component.module';
import { AppetizersRoutingModule } from './appetizers.component-routing.module';
import { AppetizersComponent } from './appetizers.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppetizersRoutingModule,
    SlideModule
  ],
  declarations: [AppetizersComponent],
  exports:[],
})
export class AppetizersModule {}
