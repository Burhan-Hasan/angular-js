import { Component, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'timer_host.component.html'
})
export class TimerHostComponent {

    tick1(value: number) {
        console.log(value);
    }

}