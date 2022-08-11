import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public route: ActivatedRoute) {}
  title = 'ang-exc1';
  active = 1;
  links = [
    { title: 'Login', fragment: 'login' },
    { title: 'List posts', fragment: 'list' },
    { title: 'Exit logout', fragment: 'exit' }
  ];
  nav: any;
}
