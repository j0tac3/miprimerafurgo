import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostSelectedComponent } from './components/post-components/post-selected/post-selected.component';
import { CreteNewPostComponent } from './components/post-components/crete-new-post/crete-new-post.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { CamperizacionComponent } from './pages/camperizacion/camperizacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { AdministrarComponent } from './pages/administrar/administrar.component';
import { AdminarticulosComponent } from './components/admin-components/adminarticulos/adminarticulos.component';
import { AdminaventurasComponent } from './components/admin-components/adminaventuras/adminaventuras.component';
import { ADMINAVENTURAS_ROUTERS } from './components/admin-components/adminaventuras/adminaventuras.routes';
import { LoginComponent } from './components/user-components/login/login.component';
import { RegisterComponent } from './components/user-components/register/register.component';
 
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'camperizar', component: CamperizacionComponent },
  { path: 'aventuras', component: PostComponent,},
      /* children : [
      { path: 'aventuras/:id', component: PostSelectedComponent },
    ] }, */
  { path: 'articulos', component: ArticulosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'createPost/:id', component: CreteNewPostComponent },
  { path: 'createPost', component: CreteNewPostComponent },
  { path: 'administrar', component: AdministrarComponent },
  { path: 'adminArticulos', component: AdminarticulosComponent },
  { path: 'adminAventuras', component: AdminaventurasComponent,
    children: ADMINAVENTURAS_ROUTERS,
  },
  { path: 'aventura/:id', component: PostSelectedComponent },
  { path: 'aventura', component: PostSelectedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' });
