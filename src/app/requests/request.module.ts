import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { requestRouting } from './request-routing.module';
import { PostService } from './service/post.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PostItemComponent, PostListComponent],
  imports: [CommonModule, requestRouting, HttpClientModule],
  providers: [PostService],
  exports: [PostItemComponent, PostListComponent],
})
export class RequestModule {}
