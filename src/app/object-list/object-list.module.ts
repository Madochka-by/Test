import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ObjectListComponent } from './component/list/object-list.component';
import { ObjectItemComponent } from './item/object-item.component';
import { ObjectListRouting } from './object-list-routing.module';

@NgModule({
  imports: [BrowserModule, ObjectListRouting],
  exports: [ObjectListComponent, ObjectItemComponent],
  declarations: [ObjectListComponent, ObjectItemComponent, ObjectItemComponent],
  providers: [],
})
export class ObjectListModule {}
