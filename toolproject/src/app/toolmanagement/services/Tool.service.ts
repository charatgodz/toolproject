import { map } from 'rxjs/operators';
import { resolve } from 'url';
import { HttpService } from './../../services/http.service';
import { Itool, IinventoryComponent, IloanHeader, IloanDetail, ILoanTool, IToolSearch } from './../../shareds/interfaces/shared.interface';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ToolService {
  public items: Itool[] = [];
  public loanHeader: IloanHeader[] = [];
  public loanDetail: IloanDetail[] = [];
  public loanTool: ILoanTool[] = [];
  constructor(private http: HttpService) { }

  getTools(accessToken, options?: IToolSearch) {
    return (this.http.requestGet('api/tool', accessToken)).pipe(map(
      (res : Itool[]) => {res.filter()}
    ))
  }

  insertLoadHeader(model: IloanHeader, accessToken) {
    return this.http.requestPost('api/tool/loanheader', model, accessToken)
  }

  insertLoanDetail(model: IloanDetail) {
    return new Promise<IloanDetail[]>((resolve, reject) => {
      this.loanDetail.push(model);
      resolve(this.loanDetail);
    });
  }

  getToolLoan() {
    return new Promise<ILoanTool[]>((resolve, reject) => {

    });
  }



}

