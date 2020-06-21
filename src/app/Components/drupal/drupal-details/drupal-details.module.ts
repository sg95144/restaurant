import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DrupalDetailsRoutingModule } from './drupal-details-routing.module';
import { DrupalDetailsComponent } from './drupal-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrupalDetailsRoutingModule,
  ],
  declarations: [DrupalDetailsComponent],
  exports:[],
})
export class DrupalDetailsModule {}
