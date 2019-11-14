import { Ilogin } from './../../components/login/login.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccoutService {
  constructor() { }

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

  onLogin(model: Ilogin) {
    return new Promise<{accessToken: string}>((resolve, reject) => {
     const userLogin = this.mockUserItem.find(item => item.company_id == model.username && item.mem_password == model.password);
      if(!userLogin) return reject({ message : 'Username and Password Invalid' })
      resolve({accessToken: userLogin.mem_id})
    });
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
