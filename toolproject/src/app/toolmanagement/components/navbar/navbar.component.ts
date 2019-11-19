import { AccoutService } from './../../../shareds/services/accout.service';
import { IAccount } from "./../../../shareds/interfaces/shared.interface";
import { INavbarComponent } from './navbar.interface';
import { AlertService } from './../../../shareds/services/alert.service';
import { AppURL } from './../../../app.url';
import { AuthenService } from './../../../services/authen.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,INavbarComponent {
  AppURL: any;
  tmURL: any;
  UserLogin: IAccount;

  constructor(
    private router: Router,
    private authen: AuthenService,
    private alert: AlertService,
    private account: AccoutService
    ) {
      this.intialLoadUserLogin();
     }

  ngOnInit() {
  }

  onLogout(){
    this.alert.notify('Log out Success', 'info')
    this.authen.clearAuthenticated();
    this.router.navigate(['/',AppURL.Login]);
    this.UserLogin.mem_id = null;  
  }

  intialLoadUserLogin(){
    this.UserLogin = this.account.UserLogin;
    if(this.UserLogin.mem_id) return setTimeout(() =>  100);

    this.account.getUserLogin(this.authen.getAuthenticated())
      .then(userLonin =>{
        this.UserLogin = userLonin
      })
      .catch(err =>{
        this.alert.notify(err.Message);
        this.authen.clearAuthenticated();
        this.router.navigate(['/',AppURL.Login]);
      });
  }

}
