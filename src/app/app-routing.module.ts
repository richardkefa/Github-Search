import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsClass } from "./githubUserDetails/user-details-class"
import { GithubUserNameServiceService } from './githubUsername-service/github-user-name-service.service'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

export const componetImports=[GithubUserNameServiceService,UserDetailsClass]


