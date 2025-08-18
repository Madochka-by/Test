import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectListComponent } from './component/list/object-list.component';
import { ObjectItemComponent } from './item/object-item.component';

const routes: Routes = [
  {
    path: '',
    component: ObjectListComponent,
  },
  {
    path: ':id',
    component: ObjectItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectListRouting {}
