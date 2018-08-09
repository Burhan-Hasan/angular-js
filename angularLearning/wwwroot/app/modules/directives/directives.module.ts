﻿import { NgModule } from '@angular/core';
import { ClassesComponent, StylesComponent, CustomDirectiveHostComponent, CustomDirective, CustomDirectiveInteraction, PassingDataDirective,RepeatDirective } from './components/index';
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
    declarations: [ClassesComponent, StylesComponent, CustomDirectiveHostComponent, CustomDirective, CustomDirectiveInteraction, PassingDataDirective, RepeatDirective],
    bootstrap: []
})
export class DirectivesModule { }