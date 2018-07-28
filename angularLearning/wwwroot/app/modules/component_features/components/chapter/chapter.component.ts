import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'chapter',
    templateUrl: 'chapter.component.html',
    styleUrls: ['chapter.component.css'],
    inputs: ['caption']
})
export class ChapterComponent {
    caption: string = 'No caption';
}