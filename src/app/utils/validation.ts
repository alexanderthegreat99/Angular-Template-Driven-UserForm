import { FormGroup } from '@angular/forms';

export default class Validation {
  static match(controlName: string, checkControlName: string) {
    
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const checkControl = formGroup.controls[checkControlName];
      //console.log(control +" formGroup.controls[controlName]; "+checkControl)
      //console.log(controlName + " l " + checkControlName);


      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        control?.setErrors({ matching: true });
        checkControl?.setErrors({ matching: true });
        return { matching: true };
      } else {
        control?.setErrors(null);
        checkControl?.setErrors(null);
        return null;
      }
    };
  }
}

