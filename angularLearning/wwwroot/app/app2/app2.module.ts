import { NgModule } from '@angular/core';
import { CarsListComponent } from './components/cars/cars_list.component';
import { CarCreateEditComponent } from './components/car_create_edit/car_create_edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [CarsListComponent, CarCreateEditComponent]
})
export class App2Module {

}