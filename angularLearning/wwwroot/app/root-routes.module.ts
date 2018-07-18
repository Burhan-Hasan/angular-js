import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Example1Component, Example2Component, TdfComponent } from './index';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'example1',
                pathMatch: 'full',
                component: Example1Component
            }
            , {
                path: 'example2',
                pathMatch: 'full',
                component: Example2Component
            }
            , {
                path: 'tdf',
                pathMatch: 'full',
                component: TdfComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class RootRouterModule { }