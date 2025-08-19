import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { lifeCycleRouting } from './life-cycle-routing.module';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';

@NgModule({
  imports: [CommonModule, lifeCycleRouting],
  exports: [ParentComponent, ChildComponent],
  declarations: [ParentComponent, ChildComponent],
  providers: [],
})
export class LifeCycleModule {}
