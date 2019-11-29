import { map } from 'rxjs/operators';
import { HttpService } from './../../services/http.service';
import { Itool, IloanHeader, IloanDetail, ILoanTool, IToolSearch } from './../../shareds/interfaces/shared.interface';
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
      (res: Itool[]) => {
        if (options) {
          return res.filter(res => res[options.searchType].indexOf(options.seachText) >= 0)
        }

        return res;

      }
    ))
  }

  checkTools(batch: string) {
    return this.http.requestGet('api/tool/check?batch=' + batch)
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

