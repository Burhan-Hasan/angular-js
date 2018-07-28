import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import {TdfComponent, MdfComponent
    , HttpGetComponent, HttpPostComponent, HeadersAndParamsComponent, CarsListComponent
    , CarCreateEditComponent
} from './index';

import { componentFeaturesRoutes } from './modules/component_features/module.routes';

let routesMain: Route[] = [
    {
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
    , {
        path: 'app2',
        pathMatch: 'full',
        component: CarsListComponent
    }
    , {
        path: 'app2/add',
        pathMatch: 'full',
        component: CarCreateEditComponent
    }
    , {
        path: 'app2/edit/:id',
        pathMatch: 'full',
        component: CarCreateEditComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routesMain.concat(componentFeaturesRoutes))
    ],
    exports: [RouterModule]
})
export class RootRouterModule { }