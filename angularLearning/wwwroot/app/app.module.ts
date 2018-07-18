import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent, Example1Component, Example2Component, TdfComponent, MdfComponent } from './index';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

//import { routes } from './app.routes';

import { RootRouterModule } from './root-routes.module';

@NgModule({
    imports: [
        BrowserModule,
        RootRouterModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    declarations: [AppComponent, HomeComponent, Example1Component, Example2Component, TdfComponent, MdfComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }