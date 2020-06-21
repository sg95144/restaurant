import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WordpressDetailsComponent } from './wordpress-details.component';
import { WordpressDetailsRoutingModule } from './wordpress-details.component-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  WordpressDetailsRoutingModule
  ],
  declarations: [WordpressDetailsComponent],
  exports:[],
})
export class WordpressDetailsModule {}
