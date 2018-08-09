import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[colorRed]'
})
export class CustomDirective {
    constructor(private element: ElementRef, private renderer: Renderer2) {
        renderer.setStyle(element.nativeElement, 'color', 'red');
    }
}