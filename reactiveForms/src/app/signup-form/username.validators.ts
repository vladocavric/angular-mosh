import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs';


export class UsernameValidators {
  static canNotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {canNotContainSpace: true};
    }
    return null;
  }

  static shouldBeUnique(control: AbstractControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailNotUnique: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

  }

}
