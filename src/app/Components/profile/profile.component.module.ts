import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlideModule } from '../slide/slide.component.module';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileRoutingModule,
    SlideModule
  ],
  declarations: [ProfileComponent],
  exports:[],
})
export class ProfileModule {}
