import { Injectable } from '@angular/core';

@Injectable()
export class $ServiceCounter {
    _counter: number = 0;

    inc() {
        this._counter++;
    }

    dec() {
        this._counter--;
    }

    get value() {
        return this._counter;
    }
}