import { Injectable } from '@angular/core';


@Injectable()
export class $ServiceLogger2
{
    log(message: string) {
        console.log('%c ' + message, 'font-size:24px; color: #ab5e25');
    }
}