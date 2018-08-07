import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GuardsComponent, MainComponent, LoginComponent, AdminComponent, AuthGuard, AuthService } from './components/index';
import { routingRoutes } from './routing.routes';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routingRoutes)
    ],
    declarations: [GuardsComponent, MainComponent, LoginComponent, AdminComponent],
    providers: [AuthService, AuthGuard]
})
export class RoutingModule { }