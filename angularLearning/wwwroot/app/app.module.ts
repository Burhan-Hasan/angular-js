import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent, HomeComponent, CarComponent, CarsComponent } from './index';
import { CarModelService } from './services/car.model.service';

import { routes } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [AppComponent, HomeComponent, CarComponent, CarsComponent],
    bootstrap: [AppComponent],
    providers: [CarModelService]
})
export class AppModule { }
