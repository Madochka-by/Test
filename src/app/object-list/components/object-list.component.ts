import { Component } from '@angular/core';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss'],
})
export class ObjectListComponent {
  public myObjects = MyObjects;
  public redirectTo(id: number): void {}
}

export const MyObjects: MyObject[] = [
  {
    title: 'perrviy',
    content: 'Lorem Ipsum alkjakghhahga,fhukafghga,jfakuhgKGAkgjalfiaop',
    id: 1,
  },
  {
    title: 'vtoroy',
    content: 'Lorem Ipsum alkjakghhahga,fhukafghga,jfakuhgKGAkgjalfiaop',
    id: 2,
  },
  {
    title: 'tretiy',
    content: 'Lorem Ipsum alkjakghhahga,fhukafghga,jfakuhgKGAkgjalfiaop',
    id: 3,
  },
  {
    title: 'chetvertiy',
    content: 'Lorem Ipsum alkjakghhahga,fhukafghga,jfakuhgKGAkgjalfiaop',
    id: 4,
  },
  {
    title: 'pyatiy',
    content: 'Lorem Ipsum alkjakghhahga,fhukafghga,jfakuhgKGAkgjalfiaop',
    id: 5,
  },
];
export interface MyObject {
  title: string;
  content: string;
  id: number;
}
