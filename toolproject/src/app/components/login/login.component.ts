import { AuthenService } from './../../services/authen.service';
import { AlertService } from './../../shareds/services/alert.service';
import { AccoutService } from './../../shareds/services/accout.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppURL } from './../../app.url';
import { Component } from '@angular/core';
import { ILoginComponet } from './login.interface';
import { tmURL } from 'src/app/toolmanagement/toolmanagement.url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements ILoginComponet {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private aoccout: AccoutService,
    private alert: AlertService,
    private authen: AuthenService
  ) {
    this.initialCreateFormData();


  }

  Url = AppURL;
  form: FormGroup;


  onSubmit(): void {
    this.aoccout
      .onLogin(this.form.value)
      .then(res => {
        this.authen.setAuthenticated(res.accessToken);
        this.alert.notify('Login Success','success')
        this.router.navigate(['/', AppURL.Authen, tmURL.dashboard])
      }).catch(err => this.alert.notify(err.error.message,'warning'));

      
  }

  private initialCreateFormData() {
    this.form = this.fb.group({
      username: ['TL140802', Validators.required],
      password: ['TL140802', Validators.required]
    })
  }



}
