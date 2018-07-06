import { Injectable } from '@angular/core';

@Injectable()
export class CounterService{
    count: number = 0;

    Up() {
        this.count++;
    }

    Down() {
        this.count--;
    }

    GetValue()
    {
        return this.count;
    }
}