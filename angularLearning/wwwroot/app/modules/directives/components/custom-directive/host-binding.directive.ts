import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[pointer]'
})
export class PointerDirective {
    constructor(private element: ElementRef, private renderer: Renderer2) { }

    @HostBinding('class.pressed')
    isClicked: boolean = false;

    @HostListener('mousedown')
    onMouseDown() {
        this.isClicked = true;
    }

    @HostListener('mouseup')
    onMouseUp() {
        this.isClicked = false;
    }
}