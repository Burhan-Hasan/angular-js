import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Car } from '../../entities/car';
import { CarModelService } from '../../services/car.model.service';

@Component({
    moduleId: module.id,
    selector: 'car',
    templateUrl: 'car.component.html'
})
export class CarComponent implements OnInit {
    _car: Car

    constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _carModelService:CarModelService) { }

    ngOnInit(): void {
        this._activatedRoute.params.forEach((params: Params) => {
            let id = +params['id'];
            this._carModelService.getById(id).then((car) => {
                this._car = car;
            });
        });
    }

    goBack()
    {
        this._router.navigate(["cars"]);
    }
}