import { Component, Input } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'counter',
    templateUrl: 'counter.component.html',
    styleUrls: ['counter.component.css'],
    inputs: ['name']
})
export class CounterComponent {
    name: string = 'No name';

    @Input()
    value: number = 0;

    @Input('step')
    counterStep: number = 1;

    inc() {
        this.value += this.counterStep;
    }
}