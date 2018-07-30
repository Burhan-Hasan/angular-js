import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'timer',
    templateUrl: 'timer.component.html',
    styleUrls: ['timer.component.css']
})
export class TimerComponent {
    @Input()
    name: string = 'нет';

    value: number = 0;

    @Input()
    interval: number = 1000;

    tick: EventEmitter<number> = new EventEmitter();

    private intervalObject: any;

    stop() {
        if (!this.intervalObject) return;
        clearInterval(this.intervalObject);
        this.intervalObject = false;
    }

    start() {
        if (this.intervalObject) return;
        this.intervalObject = setInterval(() => {
            this.callBack();
        }, this.interval);
    }

    callBack() {
        this.value++;
        this.tick.emit(this.value);
    }
}