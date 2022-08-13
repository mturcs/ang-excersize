import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RouterModule} from "@angular/router";
import { ListpostComponent } from './listpost/listpost.component';
import { ExitappComponent } from './exitapp/exitapp.component';
import {NgbdModalContent} from "./login/ngbd-modal-content.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListpostComponent,
    ExitappComponent,
    NgbdModalContent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        RouterModule.forRoot([
          {path: 'login', component: LoginComponent},
          {path: 'list', component: ListpostComponent},
          {path: 'exit', component: ExitappComponent}
        ]),
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
