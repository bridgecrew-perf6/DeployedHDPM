import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { invT } from '../inviteTokenClass';

@Injectable({
  providedIn: 'root'
})
export class GentokenService {

  constructor(private http: HttpClient) {  }

  addToken(tCurrent:invT)
  {
    return this.http.post(`/tokens/generate`,tCurrent);
  }
  getToken(token: any)
  {
    console.log(token);
    return this.http.post('/tokens/get', {token: token});
  }
  deleteToken(token: any)
  {
    return this.http.post('/tokens/delete', {token: token});
  }
}
