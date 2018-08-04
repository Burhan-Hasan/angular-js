import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'counter3',
    templateUrl: 'counter3.component.html',
    styleUrls: ['counter3.component.css'],
})
export class Counter3Component
{
    name: string = 'Counter 3';

    @Input()
    value: number = 0;

    @Input('step')
    counterStep: number = 1;

    inc() {
        this.value += this.counterStep;
    }

    dec() {
        this.value -= this.counterStep;
    }
}