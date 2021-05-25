import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'camperizar', component: HomeComponent },
  { path: 'aventuras', component: PostComponent },
  { path: 'articulos', component: HomeComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' });
