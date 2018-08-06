import { Component } from '@angular/core';
import { $ServiceLogger, $ServiceLogger2 } from '../../services/index';

let $serviceSimpleLogger = {
    log: (msg: string) => {
        console.log(msg);
    }
}

@Component({
    moduleId: module.id,
    selector: 'provider_literal',
    templateUrl: 'provider_literal.component.html',
    //providers: [$ServiceLogger]
    //providers: [{ provide: $ServiceLogger, useClass: $ServiceLogger2 }]
    //providers: [{ provide: $ServiceLogger, useValue: $serviceSimpleLogger }]
    providers: [$ServiceLogger2, { provide: $ServiceLogger, useExisting: $ServiceLogger2 }] //для токена Logger использовать существующий экземпляр Logger2, а не создавать новый.
    //providers: [{
    //    provide: Logger,
    //    useFactory: () => {
    //        return new $ServiceLogger2();
    //    }
    //}]
})
export class ProviderLiteralComponent {
    constructor(private $serviceLogger: $ServiceLogger) { }

    log() {
        this.$serviceLogger.log('Click event');
    }
}