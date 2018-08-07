import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GuardsComponent } from './components/index';
import { routingRoutes } from './routing.routes';

@NgModule({
    imports: [
        RouterModule.forChild(routingRoutes)
    ],
    declarations: [GuardsComponent],
    providers: []
})
export class RoutingModule { }