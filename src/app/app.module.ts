import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { FetchUserService } from './service/fetch-user.service';
import { RepositoriesComponent } from './repositories/repositories.component';
import { DatePipe } from './pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    UsersComponent,
    RepositoriesComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FetchUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
