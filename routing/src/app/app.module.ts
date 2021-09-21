import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FollowersComponent } from './followers/followers.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FollowerComponent } from './followers/follower/follower.component';
import { BlogArchiveComponent } from './blog-archive/blog-archive.component';
import { BlogArchiveSingleComponent } from './blog-archive/blog-archive-single/blog-archive-single.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FollowersComponent,
    PostsComponent,
    HomeComponent,
    NotFoundComponent,
    FollowerComponent,
    BlogArchiveComponent,
    BlogArchiveSingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
