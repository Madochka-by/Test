import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { EmptyRouteComponent } from './component/empty-route/empty-route.component';
import { ParentComponent } from './lifecycle/component/parent/parent.component';
import { PostListComponent } from './requests/post-list/post-list.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesItemComponent } from './pipes/pipes-item/pipes-item.component';
import { ViewFooComponent } from './view-styles/component/view-foo/view-foo.component';

const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent,
  },
  {
    path: 'styles',
    component: ViewFooComponent,
  },
  {
    path: 'pipes',
    component: PipesItemComponent,
  },
  {
    path: 'lifecycle',
    component: ParentComponent,
  },
  {
    path: `request`,
    component: PostListComponent,
  },
  {
    path: `directives`,
    component: DirectivesComponent,
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full',
  },
  {
    path: 'object-list',
    loadChildren: () =>
      import('./object-list/object-list.module').then(
        (m) => m.MyObjectListModule
      ),
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
