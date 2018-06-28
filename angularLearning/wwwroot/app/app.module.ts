import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomePageComponent, AboutPageComponent, SubComponent, CounterComponent, TableComponent } from './index';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'home', component: HomePageComponent },
            { path: 'about', component: AboutPageComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ])
    ],
    declarations: [AppComponent, HomePageComponent, AboutPageComponent, SubComponent, CounterComponent, TableComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
