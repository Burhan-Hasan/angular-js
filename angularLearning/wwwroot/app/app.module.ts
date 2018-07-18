import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent, Example1Component, Example2Component, TdfComponent } from './index';
import { FormsModule } from '@angular/forms';

//import { routes } from './app.routes';

import { RootRouterModule } from './root-routes.module';

@NgModule({
    imports: [
        BrowserModule,
        RootRouterModule,
        FormsModule
    ],
    declarations: [AppComponent, HomeComponent, Example1Component, Example2Component, TdfComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }