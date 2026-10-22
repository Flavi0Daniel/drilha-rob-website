import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'sobre-nos',
    loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'servicos',
    loadChildren: () => import('./pages/services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./pages/portfolio/portfolio.module').then((m) => m.PortfolioModule),
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then((m) => m.VideosModule),
  },
  {
    path: 'contactos',
    loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 96],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
