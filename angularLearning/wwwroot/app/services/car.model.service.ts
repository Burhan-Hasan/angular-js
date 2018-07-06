import { Injectable } from '@angular/core';
import { Car } from '../entities/car';

let cars = [
    new Car(1, 'BMW', 360),
    new Car(2, 'Mercedes', 380),
    new Car(3, 'Ferrari', 420),
    new Car(4, 'Audi', 360),
    new Car(5, 'Landrover', 320),
    new Car(6, 'Ford', 380)
];

let carPromise = Promise.resolve(cars);

export class CarModelService
{
    getAll(): Promise<Car[]>
    {
        return carPromise;
    }

    getById(id: number): Promise<Car>
    {
        return carPromise.then((cars) => cars.find(x => x.id == id));
    }
}