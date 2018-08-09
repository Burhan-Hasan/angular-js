import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {
    constructor(private element: ElementRef, private renderer: Renderer2) { }

    @Input()
    confirm: Function;

    @HostListener('click')
    onConfirm(event: Event) {
        let confirmed = window.confirm('Вы уверены');
        console.log(confirmed);
        if (confirmed && this.confirm) {
            this.confirm();
        }
    }
}