import {
  Component,
  OnInit
} from '@angular/core';

// import { AppState } from '../app.service';
// import { Title } from './title';
// import { XLargeDirective } from './x-large';

@Component({
  selector: 'home',
  providers: [],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() {}

  public ngOnInit() {
    console.log('hello `Home` component');
  }

}
