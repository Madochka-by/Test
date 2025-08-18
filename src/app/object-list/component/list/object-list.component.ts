import { Component } from '@angular/core';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss'],
})
export class ObjectListComponent {
  public myObjects = myObjects;

  public redirectTo(id: number): void {}
}

export const myObjects: MyObject[] = [
  {
    title: 'perviy',
    content: 'Lorem Ipsum fagsadghajk, fahgjsaghjlkghajkg,oieuqipeoqopkexqpkmx',
    id: 1,
  },
  {
    title: 'vtoroy',
    content: 'Lorem Ipsum fagsadghajk, fahgjsaghjlkghajkg,oieuqipeoqopkexqpkmx',
    id: 2,
  },
  {
    title: 'tretiy',
    content: 'Lorem Ipsum fagsadghajk, fahgjsaghjlkghajkg,oieuqipeoqopkexqpkmx',
    id: 3,
  },
  {
    title: 'chetvertiy',
    content: 'Lorem Ipsum fagsadghajk, fahgjsaghjlkghajkg,oieuqipeoqopkexqpkmx',
    id: 4,
  },
  {
    title: 'pyatiy',
    content: 'Lorem Ipsum fagsadghajk, fahgjsaghjlkghajkg,oieuqipeoqopkexqpkmx',
    id: 5,
  },
];

export interface MyObject {
  title: string;
  content: string;
  id: number;
}
