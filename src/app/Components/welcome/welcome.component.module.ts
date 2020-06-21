import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome.component-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomeComponent],

})
export class WelcomeModule {}
