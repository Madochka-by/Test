import { NgModule } from '@angular/core';

import { ObjectItemComponent } from './component/item/object-item.component';
import { MyObjectListComponent } from './component/list/object-list.component';
import { CommonModule } from '@angular/common';
import { MyObjectListRouting } from './object-list-routing.module';

@NgModule({
  imports: [CommonModule, MyObjectListRouting],
  exports: [MyObjectListComponent, ObjectItemComponent],
  declarations: [MyObjectListComponent, ObjectItemComponent],
  providers: [],
})
export class MyObjectListModule {}
