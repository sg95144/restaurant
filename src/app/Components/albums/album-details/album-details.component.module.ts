import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlbumDetailsComponent } from './album-details.component';
import { SlideModule } from '../../slide/slide.component.module';
import { AlbumDetailsRoutingModule } from './album-details.component-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumDetailsRoutingModule,
    SlideModule
  ],
  declarations: [AlbumDetailsComponent],
  exports: [],
})
export class AlbumsModule { }
