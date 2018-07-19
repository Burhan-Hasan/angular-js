import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent, Example1Component, Example2Component, TdfComponent, MdfComponent, HttpGetComponent } from './index';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http'; //модуль позволяет инжектить http сервис. (сервис был применен в файле http_get.component.ts)

//import { routes } from './app.routes';

import { RootRouterModule } from './root-routes.module';

@NgModule({
    imports: [
        BrowserModule,
        RootRouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [AppComponent, HomeComponent, Example1Component, Example2Component, TdfComponent, MdfComponent, HttpGetComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }