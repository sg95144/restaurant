import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../slide/slide.component';
import { SlideModule } from '../slide/slide.component.module';
import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events.component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsRoutingModule,
    SlideModule
  ],
  declarations: [EventsComponent],
  exports: [],
})
export class EventsModule { }
