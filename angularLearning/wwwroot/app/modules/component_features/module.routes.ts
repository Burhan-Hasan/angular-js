import { Routes } from '@angular/router';

import { StylingComponent, CountersComponent } from './components/index';

export const componentFeaturesRoutes: Routes = [
    {
        path: "components/styling",
        component: StylingComponent
    },
    {
        path: "components/counters",
        component: CountersComponent
    }
];