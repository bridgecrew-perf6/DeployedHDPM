import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userObj } from '../userClass';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: userObj;
  authToken: string;

  constructor(private http: HttpClient) { }


  regUser(User: userObj) {
    return this.http.post(`/users/register`, User);
  }
  authUser(userlogin: any) {
    return this.http.post('/users/authenticate', userlogin);
  }
  deleteUser(id: any)
  {
    return this.http.get(`/users/delete/${id}`)
  }
  getUserId(email: String)
  {
    return this.http.post(`/users/id`,{email: email});
  }

  updateUserbyId(id: String, User: any)
  {
    return this.http.post(`/users/update/account/${id}`, User);
  }
  getUserbyEmail(email: String){
    return this.http.post(`/users/email`,{email: email});
  }
  getUser() {
    this.loadToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.get(`/users/account`, { headers: headers });
  }
  getRegUsersByHosp(Hospital: String)
  {
    return this.http.post(`/users/hospital`, {Hospital: Hospital})

  }
  getAllUsers()
  {
    return this.http.get(`/users/all`);
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  storeUserData(token: any, User: userObj) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(User));
    this.authToken = token;
    this.user = User;
  }

  loggedIn() {
    if (localStorage.id_token == undefined) {
      return false;
    }
    else {
      const helper = new JwtHelperService();
      return !helper.isTokenExpired(localStorage.id_token);
    }
  }
  isAdminAuthorized() {
    if (this.user.isAdmin == true) {
      return true;
    }
    else {
      return false;
    }

  }
  getLoggedUser()
  {
   return JSON.parse(localStorage.getItem('user'));
  }
  isUserAuthorized(pHospital: String) {
    this.user = this.getLoggedUser();
    if (this.user.Hospital == pHospital) {
      return true;
    }
    else {
      return false;
    }
  }
  updateUserPass(id: any,Password: any)
  {
    return this.http.post(`/users/update/password/${id}`, {password: Password});
  }
  logOut() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
