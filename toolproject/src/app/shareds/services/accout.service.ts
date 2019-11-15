import { HttpService } from './../../services/http.service';
import { IAccount } from './accout.service';
import { Ilogin } from './../../components/login/login.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccoutService {
  constructor(
    private http: HttpService
  ) { }

  mockUserItem: IAccount[] = [
    {
      mem_id: 1,
      mem_name: 'Charat',
      mem_sname: 'Krutmanee',
      mem_position: 'SR Logistic',
      company_id: 'TL140802',
      mem_password: 'TL140802',
      mem_nname: 'OOO',
      mem_tel: '0989069055'
    }
  ];

  getUserLogin(accessToken) {
    return new Promise<IAccount>((resolve, reject) => {
      const userLogin = this.mockUserItem.find(m => m.mem_id == accessToken);
      if (!userLogin) return reject({ Message: 'AccessToken Invalid' });
      resolve(userLogin)
    });
  }


  onLogin(model: Ilogin) {
    return this.http
    .requestPost('api/accout/login',model)
    .toPromise() as Promise<{accessToken: string}>
  }

}

export interface IAccount {
  mem_id: any;
  mem_name: string;
  mem_sname: string;
  mem_position: string;
  company_id: string;
  mem_password: string;
  mem_nname: string;
  mem_tel: string;
}
