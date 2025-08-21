import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { PipesItemComponent } from './pipes-item/pipes-item.component';
import { MyCustomPipePipe } from './pipe/my-custom-pipe.pipe';

@NgModule({
  declarations: [PipesComponent, PipesItemComponent, MyCustomPipePipe],
  exports: [PipesComponent, PipesItemComponent],
  imports: [CommonModule],
})
export class PipesModule {}
