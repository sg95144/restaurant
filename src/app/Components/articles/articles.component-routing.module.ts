import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
   
  },
  // {
  //   path:'articles',
  //   children: [
  //     {
  //       path: 'articles/:id',
  //       loadChildren: () => import('./news/news.component.module').then(m => m.NewsModule)
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule { }
