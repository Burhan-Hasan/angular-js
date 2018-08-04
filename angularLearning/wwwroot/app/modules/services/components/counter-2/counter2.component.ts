import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'counter2',
    templateUrl: 'counter2.component.html',
    styleUrls: ['counter2.component.css'],
})
export class Counter2Component
{
    name: string = 'Counter 2';

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