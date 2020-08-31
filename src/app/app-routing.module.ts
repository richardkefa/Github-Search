import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsClass } from './githubUserDetails/user-details-class';
import { GithubUserNameServiceService } from './githubUsername-service/github-user-name-service.service';
import { AboutComponent } from './about/about.component'
import { AppComponent } from './app.component'
import { GithubsearchComponent } from './githubsearch/githubsearch.component'
import { NotFoundPageComponent } from './not-found-page/not-found-page.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'home',component:GithubsearchComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:NotFoundPageComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }