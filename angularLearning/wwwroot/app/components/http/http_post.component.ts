import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from '../../entities/car';

@Component({
    moduleId: module.id,
    templateUrl: 'http_post.component.html'
})
export class HttpPostComponent {
    _car: Car = new Car(0, '', '', 0);
    _cars: Array<Car>;

    constructor(private http: Http) { }

    ngOnInit()
    {
        this.loadData();
    }

    loadData() {
        this.http.get('/api/cars').subscribe((response: Response) => {
            if (response.ok)
                this._cars = response.json();
        }, (err) => {
            console.error(err);
        });
    }

    testClick() {
        this.http.post('/api/cars', {Id:4,Manufacturer:"BMW",Model:"M3",year:2000}).subscribe((response: Response) => {
            this.loadData();
        }, (err) => {
            console.error(err);
        });
    }

    add(car: Car) {
        this.http.post('/api/cars', car).subscribe((response: Response) => {
            this.loadData();
        }, (err) => {
            console.error(err);
        });
    }
}