import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appDerective]',
})
export class DerectiveDirective implements OnDestroy, AfterViewInit {
  // public colors: string[] = [
  //   'red',
  //   'blue',
  //   'green',
  //   'yellow',
  //   'brown',
  //   'navy',
  //   'violet',
  // ];

  @Input('appDerective') colors?: string[];

  public interval: any;
  private _el: ElementRef;

  constructor(el: ElementRef) {
    this._el = el;
  }

  ngAfterViewInit(): void {
    this.changeColor(this._el);
  }

  private changeColor(el: ElementRef) {
    if (this.colors && this.colors.length != 0) {
      this.interval = setInterval(() => {
        el.nativeElement.style.color =
          this.colors![Math.floor(Math.random() * this.colors!.length)];
        // console.log('Привет');
      }, 100);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
