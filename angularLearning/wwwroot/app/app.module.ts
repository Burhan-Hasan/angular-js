import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent, Example1Component, Example2Component, TdfComponent, MdfComponent, HttpGetComponent, HttpPostComponent, HeadersAndParamsComponent } from './index';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http'; //модуль позволяет инжектить http сервис. (сервис был применен в файле http_get.component.ts)
import { App2Module } from './app2/app2.module';
//import { routes } from './app.routes';

import { RootRouterModule } from './root-routes.module';

@NgModule({
    imports: [
        BrowserModule,
        RootRouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        App2Module
    ],
    declarations: [AppComponent, HomeComponent, Example1Component, Example2Component, TdfComponent, MdfComponent, HttpGetComponent, HttpPostComponent, HeadersAndParamsComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }