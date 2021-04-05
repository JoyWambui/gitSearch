import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {RepositoriesComponent} from './repositories/repositories.component';
import {LandingPageComponent} from './landing-page/landing-page.component'

const routes: Routes = [
  {path: '', redirectTo:'/landing', pathMatch:'full'},
  {path: 'users',component:UsersComponent},
  {path:'repos', component:RepositoriesComponent},
  {path: 'landing', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
