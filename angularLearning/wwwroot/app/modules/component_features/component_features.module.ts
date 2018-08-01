import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {
    StylingComponent, ChapterComponent, ChapterContentComponent
    , CountersComponent, CounterComponent, TimerComponent, TimerHostComponent
    , AccessingToChildsComponent, BlockComponent
} from './components/index';

@NgModule({
    imports: [BrowserModule],
    declarations: [StylingComponent, ChapterComponent, ChapterContentComponent
        , CountersComponent, CounterComponent, TimerComponent, TimerHostComponent, BlockComponent
        , AccessingToChildsComponent
    ],
    bootstrap: []
})
export class ComponentFeaturesModule {

}