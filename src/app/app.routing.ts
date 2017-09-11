import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }
];
