import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppetizersComponent } from './appetizers.component';

const routes: Routes = [
  {
    path: '',
    component: AppetizersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppetizersRoutingModule {}
