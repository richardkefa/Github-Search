import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { UsernameFormComponent } from './username-form/username-form.component';
import { GithubUserNameServiceService } from './githubUsername-service/github-user-name-service.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameFormComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GithubUserNameServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
