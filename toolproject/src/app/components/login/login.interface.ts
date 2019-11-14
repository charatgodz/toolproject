import { FormGroup } from '@angular/forms'
export interface ILoginComponet{
    Url: any;
    form: FormGroup;
    onSubmit():void;
}

export interface Ilogin{
    username: string;
    password: string;
}