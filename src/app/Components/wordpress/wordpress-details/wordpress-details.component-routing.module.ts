import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordpressDetailsComponent } from './wordpress-details.component';

const routes: Routes = [
  {
    path: '',
    component: WordpressDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressDetailsRoutingModule { }
