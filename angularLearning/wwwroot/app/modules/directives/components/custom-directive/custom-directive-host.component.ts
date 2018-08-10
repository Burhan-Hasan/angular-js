import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'custom-directive-host.component.html',
    styles: ['.pressed { cursor:pointer }']
})

export class CustomDirectiveHostComponent {

    isVisible: boolean = true;

    changeVisibility() {
        this.isVisible = !this.isVisible;
    }

    onDelete() {
        alert('Deleted!');
    }
}