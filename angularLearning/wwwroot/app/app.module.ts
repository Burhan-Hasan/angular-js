import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent }  from './components/home/home.component';
import { AppComponent } from './index';
import { CarModelService } from './services/car.model.service';

import { routes } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent],
    providers: [CarModelService]
})
export class AppModule { }
