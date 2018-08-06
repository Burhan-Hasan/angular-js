import { Routes } from '@angular/router';
import { CounterHostComponent, ProviderLiteralComponent } from './components/index';

export const servicesRoutes: Routes = [
    {
        path: 'services/hierarchy',
        component: CounterHostComponent
    },
    {
        path: 'services/provider-literal',
        component: ProviderLiteralComponent
    }
];