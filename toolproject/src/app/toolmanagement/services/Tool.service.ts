import { resolve } from 'url';
import { HttpService } from './../../services/http.service';
import { Itool, IinventoryComponent, IloanHeader, IloanDetail, ILoanTool } from './../../shareds/interfaces/shared.interface';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ToolService {
  public items: Itool[] = [
    {
      "batch": '2082095',
      "goods_rcvd_batch": '2082095',
      "pn_description": "CFAST, SATA II, 16 GB, SLC, INDUSTRIAL TEMP",
      "pn": "2245046-1",
      "sn": "",
      "condition": "NEW",
      "location": 'K186',
      "bin": "TOOLD402",
      "qty_available": '5',
      "qty_borrow": '0',
      "qty_us": '0',
      "qty_repair": '0',
      "tool_life_expiration": ""
    },
    {
      "batch": '2218512',
      "goods_rcvd_batch": '2218512',
      "pn_description": "RAPID RELUBE KIT",
      "pn": "OMAT 4-71",
      "sn": "",
      "condition": "NEW",
      "location": "K186",
      "bin": "TOOLH5",
      "qty_available": '4',
      "qty_borrow": '0',
      "qty_us": '1',
      "qty_repair": '0',
      "tool_life_expiration": ""
    },
    {
      "batch": '2009157',
      "goods_rcvd_batch": '1781502',
      "pn_description": "CFAST, SATA II, 16 GB, SLC, INDUSTRIAL TEMP",
      "pn": "2245046-1",
      "sn": "",
      "condition": "FN",
      "location": "K186",
      "bin": "TOOLB302",
      "qty_available": '3',
      "qty_borrow": '0',
      "qty_us": '0',
      "qty_repair": '0',
      "tool_life_expiration": ""
    },
    {
      "batch": '2477584',
      "goods_rcvd_batch": '1872506',
      "pn_description": "DEEP SOCKET 1/4 , DRIVE 5/32",
      "pn": "STM05",
      "sn": "",
      "condition": "NEW",
      "location": "K186",
      "bin": "TB1C",
      "qty_available": '2',
      "qty_borrow": '0',
      "qty_us": '0',
      "qty_repair": '0',
      "tool_life_expiration": ""
    },
    {
      "batch": '2477585',
      "goods_rcvd_batch": '1872507',
      "pn_description": "DEEP SOCKET 1/4 , DRIVE 5/32",
      "pn": "STM05",
      "sn": "",
      "condition": "NEW",
      "location": "K186",
      "bin": "TB1C",
      "qty_available": '2',
      "qty_borrow": '0',
      "qty_us": '0',
      "qty_repair": '0',
      "tool_life_expiration": ""
    }];

  public loanHeader: IloanHeader[] = [];
  public loanDetail: IloanDetail[] = [];
  public loanTool: ILoanTool[] = [];
  constructor(private http: HttpService) { }

  getTools(accessToken) {
    return (this.http.requestGet('api/tool', accessToken)
      .toPromise() as Promise<Itool[]>).then(res => res.slice(0,100))
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

