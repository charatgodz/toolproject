import { Iemployee } from './../../shareds/interfaces/shared.interface';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpService) { }

  getEmployee(model: string): Observable<Iemployee[]> {
    return this.http.requestPost('api/employee', { 'company_id': 'TL' + model })
  }

  checkEmployee(model: string): Observable<Iemployee[]> {
    return this.http.requestPost('api/employee', { 'company_id': 'TL' + model })
  }
}
