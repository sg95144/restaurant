import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrupalDetailsComponent } from './drupal-details.component';

const routes: Routes = [
  {
    path: '',
    component: DrupalDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrupalDetailsRoutingModule {}
