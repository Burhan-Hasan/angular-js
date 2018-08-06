import { Component, Input } from '@angular/core';
import { $ServiceCounter } from '../../services/index';

@Component({
    moduleId: module.id,
    selector: 'counter1',
    templateUrl: 'counter1.component.html',
    styleUrls: ['counter1.component.css'],
    providers: [$ServiceCounter]
})
export class Counter1Component {

    constructor(private $serviceCounter: $ServiceCounter) { }

    name: string = 'Counter 1';

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