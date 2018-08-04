import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'counter1',
    templateUrl: 'counter1.component.html',
    styleUrls: ['counter1.component.css'],
})
export class Counter1Component
{
    name: string = 'Counter 1';

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