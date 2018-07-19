import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { rangeValidator } from '../../custom_validators/range.validator';


@Component({
    moduleId: module.id,
    selector: 'mdf',
    templateUrl: 'mdf.component.html'
})
export class MdfComponent {
    registrationForm: FormGroup;

    ngOnInit() {
        this.registrationForm = new FormGroup({
            username: new FormControl("max", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
            age: new FormControl("", [Validators.required, rangeValidator(10, 100)]),
            password: new FormControl("", [Validators.required])
        });
    }

    onSubmit(registrationForm: any) {
        console.log(registrationForm);
        console.log(registrationForm.valid);
        console.log(registrationForm.value);
    }
}