import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Route[] = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    }
];