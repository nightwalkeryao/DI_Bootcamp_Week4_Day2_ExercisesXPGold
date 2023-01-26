import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.setAttribute('draggable', true);
  }
}
