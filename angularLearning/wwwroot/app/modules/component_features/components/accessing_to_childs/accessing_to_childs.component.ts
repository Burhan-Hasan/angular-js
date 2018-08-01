import { Component, ViewChildren, ViewChild, QueryList, AfterViewInit } from '@angular/core';
import { BlockComponent } from '../index';

@Component({
    moduleId: module.id,
    templateUrl: 'accessing_to_childs.component.html'
})
export class AccessingToChildsComponent implements AfterViewInit {

    count: number = 0;

    @ViewChildren(BlockComponent)
    blocks: QueryList<BlockComponent>;

    @ViewChild('red')
    blockRed: BlockComponent;

    showBlock() {
        this.count = this.blocks.length;
        this.blocks.forEach(x => x.show());
        this.blockRed.paintBorderTo('red');
    }

    ngAfterViewInit(): void {
        this.blockRed.paintBorderTo('red');
    }
}