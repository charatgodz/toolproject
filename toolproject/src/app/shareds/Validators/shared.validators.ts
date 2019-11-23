import { EmployeeService } from './../../toolmanagement/services/employee.service';
import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

export function checkEmployee(emp: EmployeeService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return emp.checkEmployee(control.value).pipe(
      map(res => { return !(res.length > 0) ? { employee: true } : null; }), debounceTime(4000))
  }
}


export class SharedValidators {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if (control.value)
      if (((control.value as string).indexOf(' ') >= 0))
        return { cannotContainSpace: true };
    return null;
  }

}