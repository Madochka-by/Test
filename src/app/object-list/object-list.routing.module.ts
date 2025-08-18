import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectListComponent } from './components/object-list.component';

const routes: Routes = [
  {
    path: '',
    component: ObjectListComponent,
  },
  {
    path: ':id',
    component: ObjectListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRoutingListModule {}
