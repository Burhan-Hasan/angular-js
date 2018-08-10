import { Routes } from '@angular/router';
import { ClassesComponent, StylesComponent, CustomDirectiveHostComponent, PipesHostComponent } from './components/index';

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
    },
    {
        path: 'pipes/custom-pipe',
        component: PipesHostComponent
    }
];