import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsDetailsComponent } from './posts-details.component';

const routes: Routes = [
  {
    path: '',
    component: PostsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsDetailsRoutingModule {}
