import { Routes } from '@angular/router';
import { GuardsComponent, MainComponent, LoginComponent, AdminComponent, AuthGuard} from './components/index';

export const routingRoutes: Routes = [
    {
        path: 'routing/guards',
        component: GuardsComponent,
        children: [
            {
                path: 'main',
                component: MainComponent
            },
            {
                path: 'admin',
                component: AdminComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
    
];