import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector:'mdf',
    templateUrl:'mdf.component.html'
})
export class MdfComponent
{
    loginForm: FormGroup;

    ngOnInit() {
        this.loginForm = new FormGroup({
            login: new FormControl("max", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
            password: new FormControl("", [Validators.required])
        });
    }

    onSubmit(_loginForm: any)
    {
        console.log(_loginForm);
        console.log(_loginForm.valid);
        console.log(_loginForm.value);
    }
}