import { Iemployee } from './../interfaces/shared.interface';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpService } from './../../services/http.service';



export class SharedValidators {
    constructor(private http: HttpService) { }
    employee: Iemployee;

    public cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if (control.value)
            if (((control.value as string).indexOf(' ') >= 0))
                return { cannotContainSpace: true };
        return null;
    }


    static employeeCheck(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            
        })
    }

}