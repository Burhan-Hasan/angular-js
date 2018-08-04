import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { servicesRoutes } from './module.routes';
import { CounterHostComponent, Counter1Component, Counter2Component, Counter3Component } from './components/index'

@NgModule({
    imports: [
        RouterModule.forChild(servicesRoutes)
    ],
    declarations: [CounterHostComponent, Counter1Component, Counter2Component, Counter3Component],
    bootstrap: [],
    providers: []
})
export class ServicesModule { }