import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/home-components/header/header.component';
import { MainMenuComponent } from './components/home-components/main-menu/main-menu.component';
import { MainMenuOptionComponent } from './components/home-components/main-menu-option/main-menu-option.component';
import { FooterComponent } from './components/home-components/footer/footer.component';
import { PostComponent } from './pages/post/post.component';
import { PostListComponent } from './components/post-components/post-list/post-list.component';
import { PostMiniatureComponent } from './components/post-components/post-miniature/post-miniature.component';
import { PostMiniatureInfoComponent } from './components/post-components/post-miniature-info/post-miniature-info.component';
import { MostPopularListComponent } from './components/post-components/most-popular-list/most-popular-list.component';
import { PostCategoryListComponent } from './components/post-components/post-category-list/post-category-list.component';
import { MainMenuContractedComponent } from './components/shared/main-menu-contracted/main-menu-contracted.component';
import { UserMiniatureInfoComponent } from './components/user-components/user-miniature-info/user-miniature-info.component';
import { LateralMenuComponent } from './components/shared/lateral-menu/lateral-menu.component';
import { CamperizacionComponent } from './pages/camperizacion/camperizacion.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { PostSearchComponent } from './components/post-components/post-search/post-search.component';
import { PostSelectedComponent } from './components/post-components/post-selected/post-selected.component';
import { PostComentComponent } from './components/post-components/post-coment/post-coment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainMenuComponent,
    MainMenuOptionComponent,
    FooterComponent,
    PostComponent,
    PostListComponent,
    PostMiniatureComponent,
    PostMiniatureInfoComponent,
    MostPopularListComponent,
    PostCategoryListComponent,
    MainMenuContractedComponent,
    UserMiniatureInfoComponent,
    LateralMenuComponent,
    CamperizacionComponent,
    ArticulosComponent,
    PostSearchComponent,
    PostSelectedComponent,
    PostComentComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
