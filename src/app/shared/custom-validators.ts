import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidators {
  static phoneNumberValidator(control:AbstractControl):ValidationErrors|null{
    const result = /^(\+\d{12}\s*$|\d{11}\s*$)/.test(control.value);
    return result ? null : {phone:control.value};
  }
}
