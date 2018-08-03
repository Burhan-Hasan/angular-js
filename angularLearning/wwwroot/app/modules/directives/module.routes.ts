import { Routes } from '@angular/router';
import { ClassesComponent, StylesComponent } from './components/index';

export const directivesRoutes: Routes = [
    {
        path: 'directives/classes',
        component: ClassesComponent
    },
    {
        path: 'directives/styles',
        component: StylesComponent
    }
];