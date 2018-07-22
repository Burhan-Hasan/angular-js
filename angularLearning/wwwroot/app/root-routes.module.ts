import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Example1Component, Example2Component, TdfComponent, MdfComponent, HttpGetComponent, HttpPostComponent, HeadersAndParamsComponent } from './index';

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
            , {
                path: 'mdf',
                pathMatch: 'full',
                component: MdfComponent
            }
            , {
                path: 'http',
                pathMatch: 'full',
                component: HttpGetComponent
            }
            , {
                path: 'http_post',
                pathMatch: 'full',
                component: HttpPostComponent
            }
            , {
                path: 'headers_n_params',
                pathMatch: 'full',
                component: HeadersAndParamsComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class RootRouterModule { }