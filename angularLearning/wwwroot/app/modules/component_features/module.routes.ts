import { Routes } from '@angular/router';

import { StylingComponent, CountersComponent, TimerHostComponent } from './components/index';

export const componentFeaturesRoutes: Routes = [
    {
        path: "components/styling",
        component: StylingComponent
    },
    {
        path: "components/counters",
        component: CountersComponent
    },
    {
        path: "components/custom-event",
        component: TimerHostComponent
    }
];