import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent, TdfComponent, MdfComponent, HttpGetComponent, HttpPostComponent, HeadersAndParamsComponent } from './index';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http'; //������ ��������� ��������� http ������. (������ ��� �������� � ����� http_get.component.ts)
import { App2Module } from './app2/app2.module';
import { ComponentFeaturesModule } from './modules/component_features/component_features.module';
import { DirectivesModule } from './modules/directives/directives.module';
import { ServicesModule } from './modules/services/services.module';
import { RoutingModule } from './modules/routing/routing.module';

//import { routes } from './app.routes';


import { RootRouterModule } from './root-routes.module';

@NgModule({
    //������ ���� ������� ��� ������ ����������
    imports: [
        BrowserModule,
        RootRouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        App2Module,
        ComponentFeaturesModule,
        DirectivesModule,
        ServicesModule,
        RoutingModule
    ],
    //������ ���� ����������� � �������� � �������� �������� ������ ������
    declarations: [AppComponent, HomeComponent, TdfComponent, MdfComponent, HttpGetComponent, HttpPostComponent, HeadersAndParamsComponent],
    //���������� � �������� ����������� ����������
    bootstrap: [AppComponent]
})
export class AppModule { }