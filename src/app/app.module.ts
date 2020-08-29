import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { componetImports } from './app-routing.module'
import { from } from 'rxjs';
import { UserNameComponent } from './user-name/user-name.component';
import { UsernameFormComponent } from './username-form/username-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNameComponent,
    UsernameFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    componetImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
