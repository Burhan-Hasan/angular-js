import { Directive, TemplateRef, ViewContainerRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[myIf]'
})
export class MyIfDirective {
    constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

    @Input('myIf')
    set myIf(state: boolean) {
        if (state)
            this.viewContainer.createEmbeddedView(this.template);
        else
            this.viewContainer.clear();
    }
}