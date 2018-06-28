import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'counter',
    templateUrl: 'counter.component.html',
    inputs: ['name', 'step', 'count']
})
export class CounterComponent {
    name: string = 'Default name';
    step: number = 1;
    count: number = 0;

    increment() {
        this.count += +this.step;
    }
}