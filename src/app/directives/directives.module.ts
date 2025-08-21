import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { DerectiveDirective } from './derective/derective.directive';

@NgModule({
  declarations: [DirectivesComponent, DerectiveDirective],
  exports: [DirectivesComponent],
  imports: [CommonModule],
})
export class DirectivesModule {}
