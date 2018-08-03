import { NgModule } from '@angular/core';
import { ClassesComponent } from './components/index';
import { directivesRoutes } from './module.routes';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild(directivesRoutes)
    ],
    declarations: [ClassesComponent],
    bootstrap:[]
})
export class DirectivesModule { }