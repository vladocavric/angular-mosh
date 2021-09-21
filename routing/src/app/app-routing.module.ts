import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FollowersComponent} from './followers/followers.component';
import {PostsComponent} from './posts/posts.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FollowerComponent} from './followers/follower/follower.component';
import {BlogArchiveComponent} from './blog-archive/blog-archive.component';
import {BlogArchiveSingleComponent} from './blog-archive/blog-archive-single/blog-archive-single.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'followers', component: FollowersComponent, children: [
      {path: ':id', component: FollowerComponent}
    ]
  },
  {path: 'posts', component: PostsComponent},
  {path: 'archive/:year/:month', component: BlogArchiveSingleComponent},
  {path: 'archive', component: BlogArchiveComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
