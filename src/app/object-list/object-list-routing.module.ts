import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyObjectListComponent } from './component/list/object-list.component';
import { ObjectItemComponent } from './component/item/object-item.component';

const routes: Routes = [
  {
    path: '',
    component: MyObjectListComponent,
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
export class MyObjectListRouting {}
