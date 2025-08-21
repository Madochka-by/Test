import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBarComponent } from './component/view-bar/view-bar.component';
import { ViewFooComponent } from './component/view-foo/view-foo.component';

@NgModule({
  declarations: [ViewBarComponent, ViewFooComponent],
  exports: [ViewBarComponent, ViewFooComponent],
  imports: [CommonModule],
})
export class ViewStylesModule {}
