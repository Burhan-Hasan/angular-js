import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'pipes-host.component.html',
    inputs: ['numbers']
})
export class PipesHostComponent {
    numbers: number = 0;
}