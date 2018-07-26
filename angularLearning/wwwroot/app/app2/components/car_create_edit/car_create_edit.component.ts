import { Component } from "@angular/core";
import { Car } from '../../../entities/car';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'car_create_edit.component.html'
})
export class CarCreateEditComponent {

    _car: Car = new Car(0, '', '', 0);

    constructor(private http: Http, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {

        this.activatedRoute.params.forEach((param: Params) => {
            let carId = +param['id'];
            if (carId)
            {
                this.http.get('/api/cars', { params: { id: carId } }).subscribe((res: Response) => {
                    this._car = res.json();
                });
            }
            else
                this.http.get('/api/cars/getid').subscribe((res: Response) => this._car.Id = res.json(), err => console.error(err));

        });
    }

    addOrEdit(car: Car) {
        this.http.post('/api/cars', car).subscribe((response: Response) => {
            this.router.navigate(['app2']);
        }, (err) => {
            console.error(err);
        });
    }

    goBack() {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    }
}