import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SlideComponent } from './Components/slide/slide.component';
import { DeliveryComponent } from './Components/delivery/delivery.component';
import { HomedeliveryComponent } from './Components/delivery/homedelivery/homedelivery.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'slide',
    loadChildren: () => import('./Components/slide/slide.component.module').then(m => m.SlideModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./Components/welcome/welcome.component.module').then(m => m.WelcomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Components/home/home.component.module').then(m => m.HomeModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./Components/categories/categories.component.module').then(m => m.CategoriesModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./Components/favorites/favorites.component.module').then(m => m.FavoritesModule)
  },
  {
    path: 'appetizers',
    loadChildren: () => import('./Components/appetizers/appetizers.component.module').then(m => m.AppetizersModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./Components/articles/articles.component.module').then(m => m.ArticlesModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./Components/cart/cart.component.module').then(m => m.CartModule)
  },
  {
    path: 'deserts',
    loadChildren: () => import('./Components/desserts/desserts.component.module').then(m => m.DesertsModule)
  },
  {
    path: 'drupal',
    loadChildren: () => import('./Components/drupal/drupal.component.module').then(m => m.DrupalModule)
  },
  {
    path: 'main-course',
    loadChildren: () => import('./Components/maincourse/maincourse.component.module').then(m => m.MainCourseModule)
  },
  {
    path: 'salads',
    loadChildren: () => import('./Components/salads/salads.component.module').then(m => m.SaladsModule)
  },
  {
    path: 'sides',
    loadChildren: () => import('./Components/sides/sides.component.module').then(m => m.SidesModule)
  },
  {
    path: 'word-press',
    loadChildren: () => import('./Components/wordpress/wordpress.component.module').then(m => m.WordpressModule)
  },
  {
    path: 'wordpress-details/:id',
    loadChildren: () => import('./Components/wordpress/wordpress-details/wordpress-details.component.module').then(m => m.WordpressDetailsModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./Components/events/events.component.module').then(m => m.EventsModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./Components/albums/albums.component.module').then(m => m.AlbumsModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./Components/posts/posts.component.module').then(m => m.PostsModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./Components/contact-us/contact-us.component.module').then(m => m.ContactUsModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./Components/map/map.component.module').then(m => m.MapModule)
  },
  {
    path: 'articles/:id',
    loadChildren: () => import('./Components/articles/news/news.component.module').then(m => m.NewsModule)
  },
  {
    path: 'event-details/:id',
    loadChildren: () => import('./Components/events/event-details/event-details-module/event-details-module.module').then(m => m.EventDetailsModuleModule)
  },
  {
    path: 'drupal-details/:id',
    loadChildren: () => import('./Components/drupal/drupal-details/drupal-details.module').then(m => m.DrupalDetailsModule)
  },
  {
    path: 'posts-details/:id',
    loadChildren: () => import('./Components/posts/posts-details/posts-details.component.module').then(m => m.PostsDetailsModule)
  }, {
    path: 'products/:id',
    loadChildren: () => import('./Components/products/products.component.module').then(m => m.ProducsModule)
  },
  {
   path:'checkout',
   loadChildren: () => import('./Components/delivery/delivery.component.module').then(m => m.DeliveryModule)
  },
  {
    path:'checkout-home',
    loadChildren: () => import('./Components/delivery/homedelivery/homedelivery.component.module').then(m => m.HomeDeliveryModule)
   },
   {
    path:'checkout-takeaway',
    loadChildren: () => import('./Components/delivery/takeaway/takeaway.component.module').then(m => m.TakeAwayModule)
   },
   {
    path:'checkout-dinein',
    loadChildren: () => import('./Components/delivery/dinein/dinein.component.module').then(m => m.DineInModule)
   },
   {
    path:'album-details',
    loadChildren: () => import('./Components/albums/album-details/album-details.component.module').then(m => m.AlbumsModule)
   },
   {
    path:'user-profile',
    loadChildren: () => import('./Components/profile/profile.component.module').then(m => m.ProfileModule)
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
