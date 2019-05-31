import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appBox]'
})
export class BoxDirective implements AfterViewInit {

  constructor(private elem: ElementRef) { }

  ngAfterViewInit(): void {
    this.elem.nativeElement.style.border = '1px solid black'
  }

}
