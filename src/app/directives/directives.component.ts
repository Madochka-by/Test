import { Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent {
  public colors: string[] = [
    'red',
    'blue',
    'green',
    'yellow',
    'brown',
    'navy',
    'violet',
  ];
}
