import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaincourseComponent } from './maincourse.component';

const routes: Routes = [
  {
    path: '',
    component: MaincourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainCourseRoutingModule {}
