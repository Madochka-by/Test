import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { requestRouting } from './request-routing.module';

@NgModule({
  imports: [CommonModule, requestRouting],
  declarations: [PostItemComponent, PostListComponent],
  exports: [PostItemComponent, PostListComponent],
})
export class RequestModule {}
