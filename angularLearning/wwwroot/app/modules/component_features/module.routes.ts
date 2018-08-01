import { Routes } from '@angular/router';

import { StylingComponent, CountersComponent, TimerHostComponent, AccessingToChildsComponent } from './components/index';

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
    },
    {
        path: "components/accessing-to-childs",
        component: AccessingToChildsComponent
    }
];