import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[hover-effect]'
})
export class CustomDirectiveInteraction {
    constructor(private element: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.changeColor('green');
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.changeColor(null);
    }

    changeColor(value: string) {
        this.renderer.setStyle(this.element.nativeElement, 'color', value);
    }
}