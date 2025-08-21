import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-foo',
  templateUrl: './view-foo.component.html',
  styleUrls: ['./view-foo.component.scss'],
  styles: [
    `
      h1 {
        color: green;
      }
    `,
  ],
})
export class ViewFooComponent {}
