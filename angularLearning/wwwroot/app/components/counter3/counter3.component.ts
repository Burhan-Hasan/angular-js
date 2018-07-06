import { Component } from '@angular/core';

import { CounterService } from '../../services/counter.service';

@Component({
    moduleId: module.id,
    selector: 'counter3',
    templateUrl: 'counter3.component.html',
    providers: [CounterService]
})
export class Counter3Component {
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