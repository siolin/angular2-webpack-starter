import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
// import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <h1>App component</h1>
    <nav>
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Home
      </a>
      <a [routerLink]=" ['./crm'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Crm
      </a>
      <a [routerLink]=" ['./extranet'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Extranet
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {

  constructor() {}

  public ngOnInit() {}

}
