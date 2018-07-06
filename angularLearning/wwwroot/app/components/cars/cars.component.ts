import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarModelService } from '../../services/car.model.service';
import { Car } from '../../entities/car';
@Component({
    moduleId: module.id,
    selector: 'cars',
    templateUrl: 'cars.component.html'
})
export class CarsComponent implements OnInit{
    _cars:Car[];

    constructor(private _router: Router, private _carModelService: CarModelService) { }

    ngOnInit(): void {
        this._carModelService.getAll().then((cars) => this._cars = cars);
    }

}