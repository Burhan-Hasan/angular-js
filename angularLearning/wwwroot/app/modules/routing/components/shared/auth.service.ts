import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    returnURL: string;

    login(name: string, pass: string) {
        return (this.isLoggedIn = (name == 'admin' && pass == 'admin') ? true : false);
    }

    logout() {
        this.isLoggedIn = false;
    }
}