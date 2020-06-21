import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrupalComponent } from './drupal.component';
import { DrupalDetailsComponent } from './drupal-details/drupal-details.component';

const routes: Routes = [
  {
    path: '',
    component: DrupalComponent,
    // children:[
    //   {
      
    //     path:'drupal-details',
    //     component:DrupalDetailsComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrupalRoutingModule {}
