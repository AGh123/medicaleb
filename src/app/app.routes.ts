import { Routes } from '@angular/router';

export const routes: Routes = [
  //   { path: 'home', component: HomeComponent, title: 'Home' },
  //   { path: 'products', component: CatalogComponent, title: 'Products' },
  //   { path: 'about', component: AboutComponent, title: 'About' },
  //   { path: 'contact', component: AboutComponent, title: 'Contact' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
