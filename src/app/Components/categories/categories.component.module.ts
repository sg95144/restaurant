import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../slide/slide.component';
import { CategoriesRoutingModule } from './categories.component-routing.moule';
import { CategoriesComponent } from './categories.component';
import { HomeComponent } from '../home/home.component';
import { SlideModule } from '../slide/slide.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesRoutingModule,
    SlideModule
  ],
  declarations: [CategoriesComponent],
  exports:[],
})
export class CategoriesModule {}
