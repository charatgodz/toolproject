import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  constructor() { }
  private accessKey = 'accessToken';

  setAuthenticated(accessToken: string): void {
    localStorage.setItem(this.accessKey, accessToken);
  }

  getAuthenticated(): string {
    return localStorage.getItem(this.accessKey);
  }

  clearAuthenticated(){
    localStorage.removeItem(this.accessKey);
  }



}
