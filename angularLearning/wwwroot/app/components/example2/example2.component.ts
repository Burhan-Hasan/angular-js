import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'example2',
    templateUrl: 'example2.component.html'
})
export class Example2Component {
    public expeditors: Array<string> = ['Max','Alex'];

    addToList(value: string) {
        this.expeditors.push(value);
    }
}