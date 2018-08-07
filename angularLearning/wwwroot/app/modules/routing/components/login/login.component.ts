import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    inputs: ['name', 'pass']
})
export class LoginComponent {

    constructor(private auth: AuthService, private router: Router) { }

    name: string = "";
    pass: string = "";

    onSubmit() {
        if (this.auth.login(this.name, this.pass))
            this.router.navigate([this.auth.returnURL]);
    }

    logout() {
        this.auth.logout();
    }
}