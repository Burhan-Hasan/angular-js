import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'block',
    templateUrl: 'block.component.html',
    styleUrls: ['block.component.css']
})
export class BlockComponent {
    private visible: boolean = false;

    red: boolean = false;

    show() {
        this.visible = true;
    }

    paintBorderTo(color: string) {
        if (color == 'red')
            this.red = true;
    }
}