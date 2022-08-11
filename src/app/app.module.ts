import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RouterModule} from "@angular/router";
import { ListpostComponent } from './listpost/listpost.component';
import { ExitappComponent } from './exitapp/exitapp.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListpostComponent,
    ExitappComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        RouterModule.forRoot([])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
