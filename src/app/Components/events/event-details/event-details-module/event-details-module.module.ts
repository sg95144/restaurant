import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventDetailsModuleRoutingModule } from './event-details-module-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventDetailsComponent } from '../event-details.component';


@NgModule({
  declarations: [EventDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailsModuleRoutingModule
  ]
})
export class EventDetailsModuleModule { }
