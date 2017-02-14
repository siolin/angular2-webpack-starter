import {
  Component,
  OnInit,
} from '@angular/core';
console.log('`Crm` component loaded asynchronously');

@Component({
  selector: 'crm',
  template: `
    <h1>Hello from Crm</h1>
  `,
})
export class CrmComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Crm` component');
  }

}
