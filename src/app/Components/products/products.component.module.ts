import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlideModule } from '../slide/slide.component.module';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsRoutingModule,
    SlideModule
  ],
  declarations: [ProductsComponent],
  exports:[],
})
export class ProducsModule {}
