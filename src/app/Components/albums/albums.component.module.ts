import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../slide/slide.component';
import { SlideModule } from '../slide/slide.component.module';
import { AlbumsComponent } from './albums.component';
import { AlbumsRoutingModule } from './albums.component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumsRoutingModule,
    SlideModule
  ],
  declarations: [AlbumsComponent],
  exports: [],
})
export class AlbumsModule { }
