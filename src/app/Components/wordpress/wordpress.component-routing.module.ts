import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordpressComponent } from './wordpress.component';
import { WordpressDetailsComponent } from './wordpress-details/wordpress-details.component';

const routes: Routes = [
  {
    path: '',
    component: WordpressComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressRoutingModule { }
