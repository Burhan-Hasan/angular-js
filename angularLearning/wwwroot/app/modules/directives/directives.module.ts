import { NgModule } from '@angular/core';
import { ClassesComponent, StylesComponent, MyIfDirective, CustomDirectiveHostComponent, PointerDirective, CustomDirective, CustomDirectiveInteraction, PassingDataDirective, RepeatDirective, ConfirmDirective } from './components/index';
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
    declarations: [ClassesComponent, StylesComponent, CustomDirectiveHostComponent
        , CustomDirective, CustomDirectiveInteraction, PassingDataDirective, RepeatDirective, ConfirmDirective, PointerDirective
        , MyIfDirective
    ],
    bootstrap: []
})
export class DirectivesModule { }