// async validator for old password
// validators for mincing new password and confirm
import {AbstractControl, ValidationErrors} from '@angular/forms';

export class PasswordValidators {
  static checkPassword(control: AbstractControl): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== '123456') {
          resolve({incorrectPassword: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static confirmPassword(form: AbstractControl): ValidationErrors | null {
    if (form.value.newPassword !== form.value.confirmPassword) {
      return {notConfirmPassword: true};
    }
    return null;
  }
}
