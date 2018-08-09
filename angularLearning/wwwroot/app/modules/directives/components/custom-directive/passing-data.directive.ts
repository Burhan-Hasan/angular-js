import { Directive, ElementRef, Renderer2, HostListener,Input } from '@angular/core';

@Directive({
    selector: '[bg-color]'
})
export class PassingDataDirective {
    constructor(private element: ElementRef, private renderer: Renderer2) { }

    @Input('bg-color')
    set bgColor(color: string) {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', color);
    }
}