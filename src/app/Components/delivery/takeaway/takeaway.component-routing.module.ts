import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeawayComponent } from './takeaway.component';


const routes: Routes = [
  {
    path: '',
    component:  TakeawayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeAwayRoutingModule {}
