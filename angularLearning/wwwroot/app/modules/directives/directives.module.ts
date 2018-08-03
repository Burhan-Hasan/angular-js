import { NgModule } from '@angular/core';
import { ClassesComponent } from './components/index';
import { directivesRoutes } from './module.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        RouterModule.forChild(directivesRoutes),
        FormsModule,
        CommonModule
    ],
    declarations: [ClassesComponent],
    bootstrap:[]
})
export class DirectivesModule { }