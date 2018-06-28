import { Component } from '@angular/core';


@Component({
    selector: 'my-row',
    templateUrl: 'my-row.component.html',
    inputs: ["Id", "Name", "Price"]
})
export class MyRowComponent {

    Id: number;
    Name: string;
    Price: number;
}