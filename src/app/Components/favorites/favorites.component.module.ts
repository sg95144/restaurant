import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../slide/slide.component';
import { SlideModule } from '../slide/slide.component.module';
import { FavoritesRoutingModule } from './favorites.component.-routing.module';
import { FavoritesComponent } from './favorites.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesRoutingModule,
    SlideModule
  ],
  declarations: [FavoritesComponent],
  exports:[],
})
export class FavoritesModule {}
