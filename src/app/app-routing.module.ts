
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

import { GrGuardGuard } from './gr-guard.guard';
import {LoginComponent} from "./login/login.component";
import {ListpostComponent} from "./listpost/listpost.component";
import {ExitappComponent} from "./exitapp/exitapp.component";



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListpostComponent },
  { path: 'exit', component: ExitappComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})



export class AppRoutingModule { }
export class AppModule { }

export class AppComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

  }











