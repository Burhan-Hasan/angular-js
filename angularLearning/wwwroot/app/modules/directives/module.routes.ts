import { Routes } from '@angular/router';
import { ClassesComponent, StylesComponent, CustomDirectiveHostComponent } from './components/index';

export const directivesRoutes: Routes = [
    {
        path: 'directives/classes',
        component: ClassesComponent
    },
    {
        path: 'directives/styles',
        component: StylesComponent
    },
    {
        path: 'directives/custom-directives',
        component: CustomDirectiveHostComponent
    }
];