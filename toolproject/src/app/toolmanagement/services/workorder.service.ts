import { Observable } from 'rxjs';
import { Iworkorder } from './../../shareds/interfaces/shared.interface';
import { HttpService } from './../../services/http.service';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class WorkorderService {
    constructor(private http: HttpService) { }
    getWorkorders(accessToken?): Observable<Iworkorder[]> {
        return this.http.requestGet('api/workorder', accessToken)
    }
}