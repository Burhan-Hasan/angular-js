import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { servicesRoutes } from './module.routes';
import { $ServiceCounter } from './services/counter_service.component';

import { CounterHostComponent, Counter1Component, Counter2Component, Counter3Component } from './components/index'

@NgModule({
    imports: [
        RouterModule.forChild(servicesRoutes)
    ],
    declarations: [CounterHostComponent, Counter1Component, Counter2Component, Counter3Component],
    bootstrap: [],
    providers: [$ServiceCounter]
})
export class ServicesModule { }