import { Component } from '@angular/core';

import { CounterService } from '../../services/counter.service';

@Component({
    moduleId: module.id,
    selector: 'counter1',
    templateUrl: 'counter1.component.html'
})
export class Counter1Component {
    private counter: number = 0;

    constructor(private counterService: CounterService) {

    }

    Up() {
        this.counterService.Up();
        this.counter = this.counterService.GetValue();
    }

    Down() {
        this.counterService.Down();
        this.counter = this.counterService.GetValue();
    }

}