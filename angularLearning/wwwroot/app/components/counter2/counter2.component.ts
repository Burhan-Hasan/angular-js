import { Component } from '@angular/core';

import { CounterService } from '../../services/counter.service';

@Component({
    moduleId: module.id,
    selector: 'counter2',
    templateUrl: 'counter2.component.html'
})
export class Counter2Component {
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