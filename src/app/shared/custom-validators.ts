import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidators {
  static withPlusPhoneNumberValidator(control:AbstractControl):ValidationErrors|null{
    const result = /\+[0-9]{12}\s*$/.test(control.value);
    return result ? null : {phone:control.value};
  }
  static noPlusPhoneNumberValidator(control:AbstractControl):ValidationErrors|null{
    const result = /[0-9]{11}\s*$/.test(control.value);
    return result ? null : {noPlusPhone:control.value}
  }
}
