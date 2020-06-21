import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TakeAwayRoutingModule } from './takeaway.component-routing.module';
import { TakeawayComponent } from './takeaway.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  TakeAwayRoutingModule
  ],
  declarations: [TakeawayComponent],
  exports:[],
})
export class TakeAwayModule {}
