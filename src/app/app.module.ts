import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { UsernameFormComponent } from './username-form/username-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PostedAgoPipePipe } from './postedAgo/posted-ago-pipe.pipe';
import { GithubHttpService } from './githubRequest/github-http.service'

@NgModule({
  declarations: [
    AppComponent,
    UsernameFormComponent,
    NavbarComponent,
    AboutComponent,
    GithubsearchComponent,
    NotFoundPageComponent,
    PostedAgoPipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [GithubHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
