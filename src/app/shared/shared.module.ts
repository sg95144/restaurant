import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from '../Components/slide/slide.component';
import { SlideModule } from '../Components/slide/slide.component.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[CommonModule,SlideModule]
})
export class SharedModule { }
