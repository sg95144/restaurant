import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DineinComponent } from './dinein.component';

const routes: Routes = [
  {
    path: '',
    component: DineinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DineInRoutingModule {}
