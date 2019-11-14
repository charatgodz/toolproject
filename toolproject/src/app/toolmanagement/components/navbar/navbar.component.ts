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
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private authen: AuthenService,
    private alert: AlertService
    ) { }

  ngOnInit() {
  }

  onLogout(){
    this.authen.clearAuthenticated();
    this.router.navigate(['/',AppURL.Login]);
    this.alert.notify('Log out Success', 'info')

  }

}
