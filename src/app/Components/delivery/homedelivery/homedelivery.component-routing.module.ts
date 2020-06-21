import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomedeliveryComponent } from './homedelivery.component';

const routes: Routes = [
  {
    path: '',
    component: HomedeliveryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDeliveryRoutingModule {}
