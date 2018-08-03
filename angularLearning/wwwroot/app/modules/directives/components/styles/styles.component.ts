import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'styles.component.html'
})
export class StylesComponent {
    getStyles() {
        return {
            "color": "green",
            "font-size": "24px",
            "font-style": "italic"
        }
    }
}