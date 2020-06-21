import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../slide/slide.component';
import { SlideModule } from '../slide/slide.component.module';
import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contact-us.component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactUsRoutingModule,
    SlideModule
  ],
  declarations: [ContactUsComponent],
  exports:[],
})
export class ContactUsModule {}
