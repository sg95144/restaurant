import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../slide/slide.component';
import { SlideModule } from '../slide/slide.component.module';
import { DrupalRoutingModule } from './drupal.component-routing.module';
import { DrupalComponent } from './drupal.component';
import { DrupalDetailsComponent } from './drupal-details/drupal-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrupalRoutingModule,
    SlideModule
  ],
  declarations: [DrupalComponent],
  exports:[],
})
export class DrupalModule {}
