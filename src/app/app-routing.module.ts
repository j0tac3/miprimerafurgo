import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { CamperizacionComponent } from './pages/camperizacion/camperizacion.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'camperizar', component: CamperizacionComponent },
  { path: 'aventuras', component: PostComponent },
  { path: 'articulos', component: ArticulosComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' });
