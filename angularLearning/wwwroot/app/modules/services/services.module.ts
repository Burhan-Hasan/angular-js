import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { servicesRoutes } from './module.routes';
import { $ServiceCounter } from './services/counter.service';

import {
    CounterHostComponent, Counter1Component, Counter2Component, Counter3Component,
    ProviderLiteralComponent
} from './components/index'

@NgModule({
    imports: [
        RouterModule.forChild(servicesRoutes)
    ],
    declarations: [CounterHostComponent, Counter1Component, Counter2Component, Counter3Component, ProviderLiteralComponent],
    bootstrap: [],
    providers: [$ServiceCounter]
})
export class ServicesModule { }