import { Component, Input } from '@angular/core';
import { $ServiceCounter } from '../../services/index';

@Component({
    moduleId: module.id,
    selector: 'counter3',
    templateUrl: 'counter3.component.html',
    styleUrls: ['counter3.component.css'],
})
export class Counter3Component
{
    constructor(private $serviceCounter: $ServiceCounter) { }

    name: string = 'Counter 3';

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