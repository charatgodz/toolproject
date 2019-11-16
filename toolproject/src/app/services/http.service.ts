import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private address: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {

  }

  requestGet(url: string, accessToken?: String) {
    return this.http
      .get(`${this.address}${url}`, {headers: this.appendHeaders(accessToken)})
      .pipe(catchError(err => this.handelError(err)));
  }

  requestPost(url: string, body: any) {
    return this.http
      .post(`${this.address}${url}`, body)
      .pipe(catchError(err => this.handelError(err)));
  }

  private handelError(errRespond: HttpErrorResponse): Observable<any> {
    errRespond['Message'] = errRespond.message;
    throw errRespond;
  }
  private appendHeaders(accessToken) {
    const headers = {};
    if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`;
    return new HttpHeaders(headers);
  }


}
