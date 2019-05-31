import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appBox]'
})
export class BoxDirective implements AfterViewInit {

  @Input() // enterate input
  size = '1px';

  @Input()
  type = 'solid';

  @Input()
  color = 'black';

  constructor(private elem: ElementRef) { }

  ngAfterViewInit(): void {
    this.elem.nativeElement.style.border = `${this.size} ${this.type} ${this.color}`;
    this.elem.nativeElement.style.borderRadius = '15px';
    this.elem.nativeElement.style.padding = '6px'
    this.elem.nativeElement.style.margin = '6px'
  }

}
