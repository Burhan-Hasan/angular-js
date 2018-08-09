import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[colorRed]'
})
export class CustomDirective {
    constructor(private element: ElementRef, private renderer: Renderer2) {
        //ElementRef - представляет ссылку на элемент, к которому будет применяться директива

        //Renderer2 представляет сервис, который также при вызове директивы автоматически передается в ее конструктор,
        //и мы можем использовать данный сервис для стилизации элемента.

        renderer.setStyle(element.nativeElement, 'color', 'red');
    }
}