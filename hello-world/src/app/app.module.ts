import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { TweeterLikeComponent } from './tweeter-like/tweeter-like.component';
import { NavComponent } from './nav/nav.component';
import { FormatInputDirective } from './format-input.directive';
import { ZeppyComponent } from './zeppy/zeppy.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    BootstrapPanelComponent,
    TweeterLikeComponent,
    NavComponent,
    FormatInputDirective,
    ZeppyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
