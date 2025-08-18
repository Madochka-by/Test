import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectListComponent } from './components/object-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ObjectItemComponent } from './object-item/object-item.component';
import { MyRoutingListModule } from './object-list.routing.module';

@NgModule({
  declarations: [ObjectListComponent, ObjectItemComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ObjectItemComponent,
    MyRoutingListModule,
  ],
  exports: [ObjectListComponent],
})
export class ObjectListModule {}
