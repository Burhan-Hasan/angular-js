import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'admin.component.html',
    inputs: ['name', 'pass']
})
export class AdminComponent {

    name: string = "";
    pass: string = "";

    onSubmit() {

    }
}