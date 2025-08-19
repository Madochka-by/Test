import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    OnDestroy,
    OnChanges
{
  @Input() title!: string;

  @Output() eventChange = new EventEmitter<string>();

  constructor() {
    console.log('%cConstructor', 'color: red');
  }

  public tempTitle!: string;

  ngOnInit(): void {
    console.log('%cOnInit', 'color: blue');
    this.tempTitle = this.title;
  }

  ngDoCheck(): void {
    console.log('%cDoChekc', 'color: orange');
  }

  ngAfterContentInit(): void {
    console.log('%cContent', 'color: yellow');
  }

  ngAfterViewInit(): void {
    console.log('%cViewInit', 'color: violet');
  }

  ngOnDestroy(): void {
    console.log('%cOnDestroy', 'color: green');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('%cChanges', 'color: whitesmoke');
  }

  public clickHandler(): void {
    this.tempTitle = 'I am mutated';
    this.eventChange.emit(this.tempTitle);
  }
}
