import { Injectable } from '@angular/core';


@Injectable()
export class $ServiceLogger
{
    log(message: string) {
        console.log('%c ' + message, 'font-size:24px; color: #bada55');
    }
}