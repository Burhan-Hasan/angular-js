import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[repeat], repeat'//директиву можно использовать как атрибут и как элемент
})
export class RepeatDirective {
    constructor(private element: ElementRef, private renderer: Renderer2) { }

    @Input()
    message: string;

    @Input()
    count: number;

    ngOnInit() {
        for (let i = 0; i < this.count; i++) {
            let div = this.renderer.createElement('div');
            this.renderer.appendChild(this.element.nativeElement, div);
            div.innerText = this.message;
        }
    }
}