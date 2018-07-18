import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'example1',
    templateUrl:'example1.component.html'
})
export class Example1Component {
    public name: string = '';

    setName(value: string)
    {
        this.name = value;
    }
}