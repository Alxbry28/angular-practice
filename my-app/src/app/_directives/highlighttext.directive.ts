import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlighttext]'
})
export class HighlighttextDirective {

  constructor(private el: ElementRef) {
    //Renderer2
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = "blue";
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = "purple";
  }

}
