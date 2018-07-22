import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from '../../entities/car';

/*
 Чтобы использовать сервис Http надо импортировать модуль HttpModule
 */

@Component({
    moduleId: module.id,
    templateUrl: 'http_get.component.html'
})
export class HttpGetComponent {
    constructor(private http: Http) { }

    _cars: Array<Car>;

    loadData()
    {
        this.http.get('/api/cars').subscribe((response: Response) => {
            if (response.ok)
                this._cars = response.json() as Car[];
        }, (err) => {
            console.error(err);
        });
    }
}