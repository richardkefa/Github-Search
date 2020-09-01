import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { UsernameFormComponent } from './username-form/username-form.component';
import { GithubUserNameServiceService } from './githubUsername-service/github-user-name-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { GithubinfoComponent } from './githubinfo/githubinfo.component';
import { PostedAgoPipePipe } from './postedAgo/posted-ago-pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    UsernameFormComponent,
    NavbarComponent,
    AboutComponent,
    GithubsearchComponent,
    NotFoundPageComponent,
    GithubinfoComponent,
    PostedAgoPipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [GithubUserNameServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
