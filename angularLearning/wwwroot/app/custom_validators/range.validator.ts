import { AbstractControl, ValidatorFn } from '@angular/forms';

export function rangeValidator(min: number, max: number): ValidatorFn
{
    return function (control: AbstractControl): { [key: string]: any } {
        let value = +control.value;
        if (isNaN(value) || (value < min || value > max))
            return { 'rangevalidator': { value } };
        else
            return null;
    }
}