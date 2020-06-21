import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidesComponent } from './sides.component';

const routes: Routes = [
  {
    path: '',
    component: SidesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidesRoutingModule {}
