﻿import { Component } from '@angular/core';
import { Car } from '../../../entities/car';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'cars_list.component.html',
    styleUrls: ['cars_list.component.css']
})
export class CarsListComponent {
    _cars: Car[];

    constructor(private http: Http, private router: Router) {

    }

    add() {
        this.router.navigate(["app2", "add"]);
    }

    edit(car: Car) {
        this.router.navigate(["app2", "edit", car.Id]);
    }

    delete(car: Car) {
        this.http.delete('/api/cars/delete/' + car.Id).subscribe((res) => this.readData());
    }

    readData() {
        this.http.get('/api/cars').subscribe((response: Response) => {
            if (response.ok)
                this._cars = response.json() as Car[];
        }, (err) => {
            console.error(err);
        });
    }

    ngOnInit() {
        this.readData();
    }
}