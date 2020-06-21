import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DessertsComponent } from './desserts.component';

const routes: Routes = [
  {
    path: '',
    component: DessertsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesertsRoutingModule {}
