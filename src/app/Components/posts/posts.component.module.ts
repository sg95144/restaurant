import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../slide/slide.component';
import { SlideModule } from '../slide/slide.component.module';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts.component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsRoutingModule,
    SlideModule
  ],
  declarations: [PostsComponent],
  exports:[],
})
export class PostsModule {}
