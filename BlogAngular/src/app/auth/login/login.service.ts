import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  noAuthHeaders = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  login(userCredentials): Observable<any> {
    return this.httpClient.post(
      environment.apiBaseUrl + '/authenticate',
      userCredentials,
      this.noAuthHeaders
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getUserInfo(){
    return (
      localStorage.getItem('info'),
      localStorage.getItem('fullName'),
      localStorage.getItem('email')
      )
  }

  setUserInfo(user){
    localStorage.setItem('_id', user._id);
    localStorage.setItem('fullName', user.fullName);
    localStorage.setItem('email', user.email);
  }

  deleteToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    localStorage.removeItem('fullName');
    localStorage.removeItem('email');
  }

  getUserPayload() {
    const token = this.getToken();
    if (token) {
      const userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  isLoggedIn() {
    const userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
}
