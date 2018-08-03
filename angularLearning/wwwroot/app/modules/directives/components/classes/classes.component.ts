import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'classes.component.html',
    styleUrls: ['classes.component.css'],
    inputs:['style']
})
export class ClassesComponent {
    style = {
        redBorder: true,
        grayBackGround: true,
        blueFontColor: true
    }
}