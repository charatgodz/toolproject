import { HttpService } from './../../services/http.service';
import { IAccount } from './accout.service';
import { Ilogin } from './../../components/login/login.interface';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccoutService {
  constructor(
    private http: HttpService
  ) { }

    public UserLogin: IAccount = {} as any;
    public setUserLogin(userLogin: IAccount){
      this.UserLogin.mem_id = userLogin.mem_id;
      this.UserLogin.company_id = userLogin.company_id;
      this.UserLogin.mem_name = userLogin.mem_name;
      this.UserLogin.mem_sname = userLogin.mem_sname;
      this.UserLogin.mem_nname = userLogin.mem_nname;
      this.UserLogin.mem_position = userLogin.mem_position;
      this.UserLogin.mem_tel = this.UserLogin.mem_tel;
      this.UserLogin.mem_title  = this.UserLogin.mem_title;
      this.UserLogin.mem_username = this.UserLogin.mem_username;
      return this.UserLogin;
    }


  getUserLogin(accessToken: string) {
    return (this.http
      .requestGet('api/member/data' ,accessToken)
      .toPromise()as Promise<IAccount>)
      .then(userLogin => this.setUserLogin(userLogin));
  }


  onLogin(model: Ilogin) {
    return this.http
      .requestPost('api/accout/login', model)
      .toPromise() as Promise<{ accessToken: string }>
  }

} 

export interface IAccount {
  mem_id: string;
  mem_title: string;
  mem_name: string;
  mem_sname: string;
  mem_position: string;
  company_id: string;
  mem_username: string;
  mem_nname: string;
  mem_tel: string;
}
