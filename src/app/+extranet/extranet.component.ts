import {
  Component,
  OnInit,
} from '@angular/core';
console.log('`Extranet` component loaded asynchronously');

@Component({
  selector: 'extranet',
  template: `
    <h1>Hello from Extranet</h1>
  `,
})
export class ExtranetComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Extranet` component');
  }

}
