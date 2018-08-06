import { Component, Input } from '@angular/core';
import { $ServiceCounter } from '../../services/index';

@Component({
    moduleId: module.id,
    selector: 'counter2',
    templateUrl: 'counter2.component.html',
    styleUrls: ['counter2.component.css'],
})
export class Counter2Component
{
    constructor(private $serviceCounter: $ServiceCounter) { }

    name: string = 'Counter 2';

    @Input()
    value: number = 0;

    @Input('step')
    counterStep: number = 1;

    inc() {
        this.$serviceCounter.inc();
        this.value = this.$serviceCounter.value;
    }

    dec() {
        this.$serviceCounter.dec();
        this.value = this.$serviceCounter.value;
    }
}