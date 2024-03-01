import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.color = 'black';
    this.el.nativeElement.style.fontWeight = 'bold';
    this.el.nativeElement.style.fontSize = '20px';
    this.el.nativeElement.style.padding = '20px';
    this.el.nativeElement.style.border = '1px solid black';
    this.el.nativeElement.style.borderRadius = '5px';
    this.el.nativeElement.style.fontFamily = 'Arial, sans-serif';
  }

}
