import { Component } from "@angular/core";
import { Car } from '../../entities/car';

@Component({
    moduleId: module.id,
    selector:'tdf',
    templateUrl: 'tdf.component.html',
    inputs: ['car']
})
export class TdfComponent
{
    car: Car = new Car(1, "BMW","M3", 380);

    carDetails: string = "Empty";

    get details() { return JSON.stringify(this.car); }

    showCar()
    {
        this.carDetails = this.car.Id + ' | ' + this.car.Model + ' | ' + this.car.Year
    }

    onSubmit()
    {

    }
}